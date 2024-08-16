import {
  useCallback,
  useMemo,
  useState,
} from 'react'
import { useTranslation } from 'react-i18next'
import { RiDeleteBinLine } from '@remixicon/react'
import produce from 'immer'
import type { VarType as NumberVarType } from '../../../tool/types'
import type {
  Condition,
  HandleAddSubVariableCondition,
  HandleRemoveCondition,
  HandleUpdateCondition,
} from '../../types'
import {
  ComparisonOperator,
} from '../../types'
import { comparisonOperatorNotRequireValue } from '../../utils'
import ConditionNumberInput from '../condition-number-input'
import { FILE_TYPE_OPTIONS, SUB_VARIABLES, TRANSFER_METHOD } from '../../default'
import ConditionWrap from '../condition-wrap'
import ConditionOperator from './condition-operator'
import ConditionInput from './condition-input'
import VariableTag from '@/app/components/workflow/nodes/_base/components/variable-tag'
import type {
  Node,
  NodeOutPutVar,
} from '@/app/components/workflow/types'
import { VarType } from '@/app/components/workflow/types'
import cn from '@/utils/classnames'
import { SimpleSelect as Select } from '@/app/components/base/select'
const optionNameI18NPrefix = 'workflow.nodes.ifElse.optionName'

type ConditionItemProps = {
  disabled?: boolean
  caseId: string
  condition: Condition
  file?: { key: string }
  isSubVariableKey?: boolean
  onRemoveCondition: HandleRemoveCondition
  onUpdateCondition: HandleUpdateCondition
  nodesOutputVars: NodeOutPutVar[]
  availableNodes: Node[]
  numberVariables: NodeOutPutVar[]
  onAddSubVariableCondition?: HandleAddSubVariableCondition
}
const ConditionItem = ({
  disabled,
  caseId,
  condition,
  file,
  isSubVariableKey,
  onRemoveCondition,
  onUpdateCondition,
  nodesOutputVars,
  availableNodes,
  numberVariables,
  onAddSubVariableCondition,
}: ConditionItemProps) => {
  const { t } = useTranslation()

  const [isHovered, setIsHovered] = useState(false)

  const handleUpdateConditionOperator = useCallback((value: ComparisonOperator) => {
    const newCondition = {
      ...condition,
      comparison_operator: value,
    }
    onUpdateCondition(caseId, condition.id, newCondition)
  }, [caseId, condition, onUpdateCondition])

  const handleUpdateConditionValue = useCallback((value: string) => {
    const newCondition = {
      ...condition,
      value,
    }
    onUpdateCondition(caseId, condition.id, newCondition)
  }, [caseId, condition, onUpdateCondition])

  const handleUpdateConditionNumberVarType = useCallback((numberVarType: NumberVarType) => {
    const newCondition = {
      ...condition,
      numberVarType,
      value: '',
    }
    onUpdateCondition(caseId, condition.id, newCondition)
  }, [caseId, condition, onUpdateCondition])

  const isSelect = condition.comparison_operator && [ComparisonOperator.in, ComparisonOperator.notIn, ComparisonOperator.allOf].includes(condition.comparison_operator)
  const selectOptions = useMemo(() => {
    if (isSelect) {
      if (file?.key === 'type' || condition.comparison_operator === ComparisonOperator.allOf) {
        return FILE_TYPE_OPTIONS.map(item => ({
          name: t(`${optionNameI18NPrefix}.${item.i18nKey}`),
          value: item.value,
        }))
      }
      if (file?.key === 'transfer_method') {
        return TRANSFER_METHOD.map(item => ({
          name: t(`${optionNameI18NPrefix}.${item.i18nKey}`),
          value: item.value,
        }))
      }
      return []
    }
    return []
  }, [condition.comparison_operator, file?.key, isSelect, t])

  const isSubVariable = condition.varType === VarType.arrayFile && [ComparisonOperator.contains, ComparisonOperator.notContains].includes(condition.comparison_operator!)
  const isNotInput = isSelect || isSubVariable

  const isSubVarSelect = isSubVariableKey
  const subVarOptions = SUB_VARIABLES.map(item => ({
    name: item,
    value: item,
  }))

  const handleSubVarKeyChange = useCallback((key: string) => {
    const newCondition = produce(condition, (draft) => {
      draft.key = key
    })
    onUpdateCondition(caseId, condition.id, newCondition)
  }, [caseId, condition, onUpdateCondition])

  return (
    <div className='flex mb-1 last-of-type:mb-0'>
      <div className={cn(
        'grow bg-components-input-bg-normal rounded-lg',
        isHovered && 'bg-state-destructive-hover',
      )}>
        <div className='flex items-center p-1'>
          <div className='grow w-0'>
            {isSubVarSelect
              ? (
                <Select
                  wrapperClassName='h-6'
                  className='pl-0 text-xs'
                  defaultValue={condition.value}
                  items={subVarOptions}
                  onSelect={item => handleSubVarKeyChange(item.value as string)}
                />
              )
              : (
                <VariableTag
                  valueSelector={condition.variable_selector || []}
                  varType={condition.varType}
                />
              )}

          </div>
          <div className='mx-1 w-[1px] h-3 bg-divider-regular'></div>
          <ConditionOperator
            disabled={disabled}
            varType={condition.varType}
            value={condition.comparison_operator}
            onSelect={handleUpdateConditionOperator}
            file={file}
          />
        </div>
        {
          !comparisonOperatorNotRequireValue(condition.comparison_operator) && !isNotInput && condition.varType !== VarType.number && (
            <div className='px-2 py-1 max-h-[100px] border-t border-t-divider-subtle overflow-y-auto'>
              <ConditionInput
                disabled={disabled}
                value={condition.value}
                onChange={handleUpdateConditionValue}
                nodesOutputVars={nodesOutputVars}
                availableNodes={availableNodes}
              />
            </div>
          )
        }
        {
          !comparisonOperatorNotRequireValue(condition.comparison_operator) && !isNotInput && condition.varType === VarType.number && (
            <div className='px-2 py-1 pt-[3px] border-t border-t-divider-subtle'>
              <ConditionNumberInput
                numberVarType={condition.numberVarType}
                onNumberVarTypeChange={handleUpdateConditionNumberVarType}
                value={condition.value}
                onValueChange={handleUpdateConditionValue}
                variables={numberVariables}
              />
            </div>
          )
        }
        {
          !comparisonOperatorNotRequireValue(condition.comparison_operator) && isSelect && (
            <div className='p-1'>
              <Select
                wrapperClassName='h-6'
                className='pl-0 text-xs'
                defaultValue={condition.value}
                items={selectOptions}
                onSelect={item => handleUpdateConditionValue(item.value as string)}
              />
            </div>
          )
        }
        {
          !comparisonOperatorNotRequireValue(condition.comparison_operator) && isSubVariable && (
            <div className='p-1'>
              <ConditionWrap
                isSubVariable
                conditionId={condition.id}
                caseId={caseId}
                readOnly={!!disabled}
                nodeId=''
                cases={condition.sub_variable_condition ? [condition.sub_variable_condition] : []}
                handleAddSubVariableCondition={onAddSubVariableCondition}
                handleRemoveCase={() => { }}
                handleAddCondition={() => { }}
                handleUpdateCondition={() => { }}
                handleRemoveCondition={() => { }}
                handleUpdateConditionLogicalOperator={() => { }}
                nodesOutputVars={[]}
                availableNodes={[]}
                varsIsVarFileAttribute={{}}
                filterVar={() => true}
              />
            </div>
          )
        }
      </div>
      <div
        className='shrink-0 flex items-center justify-center ml-1 mt-1 w-6 h-6 rounded-lg cursor-pointer hover:bg-state-destructive-hover text-text-tertiary hover:text-text-destructive'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => onRemoveCondition(caseId, condition.id)}
      >
        <RiDeleteBinLine className='w-4 h-4' />
      </div>
    </div>
  )
}

export default ConditionItem
