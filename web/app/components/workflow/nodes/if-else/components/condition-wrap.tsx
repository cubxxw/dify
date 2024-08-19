'use client'
import type { FC } from 'react'
import React, { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ReactSortable } from 'react-sortablejs'
import {
  RiAddLine,
  RiDeleteBinLine,
  RiDraggable,
} from '@remixicon/react'
import type { CaseItem, HandleAddCondition, HandleAddSubVariableCondition, HandleRemoveCondition, HandleUpdateCondition, HandleUpdateConditionLogicalOperator, HandleUpdateSubVariableCondition } from '../types'
import type { Node, NodeOutPutVar, Var } from '../../../types'
import { VarType } from '../../../types'
import { useGetAvailableVars } from '../../variable-assigner/hooks'
import ConditionList from './condition-list'
import ConditionAdd from './condition-add'
import cn from '@/utils/classnames'
import Button from '@/app/components/base/button'

type Props = {
  isSubVariable?: boolean
  caseId?: string
  conditionId?: string
  nodeId: string
  cases: CaseItem[]
  readOnly: boolean
  handleSortCase?: (sortedCases: (CaseItem & { id: string })[]) => void
  handleRemoveCase: (caseId: string) => void
  handleAddCondition?: HandleAddCondition
  handleAddSubVariableCondition?: HandleAddSubVariableCondition
  handleUpdateSubVariableCondition?: HandleUpdateSubVariableCondition
  handleUpdateCondition: HandleUpdateCondition
  handleRemoveCondition: HandleRemoveCondition
  handleUpdateConditionLogicalOperator: HandleUpdateConditionLogicalOperator
  nodesOutputVars: NodeOutPutVar[]
  availableNodes: Node[]
  varsIsVarFileAttribute: Record<string, boolean>
  filterVar: (varPayload: Var) => boolean
}

const ConditionWrap: FC<Props> = ({
  isSubVariable,
  caseId: conditionParentCaseId,
  conditionId: parentConditionId,
  nodeId: id,
  cases = [],
  readOnly,
  handleSortCase = () => { },
  handleRemoveCase,
  handleUpdateCondition,
  handleAddCondition,
  handleRemoveCondition,
  handleAddSubVariableCondition,
  handleUpdateSubVariableCondition,
  handleUpdateConditionLogicalOperator,
  nodesOutputVars,
  availableNodes,
  varsIsVarFileAttribute,
  filterVar,
}) => {
  const { t } = useTranslation()

  const getAvailableVars = useGetAvailableVars()

  const [willDeleteCaseId, setWillDeleteCaseId] = useState('')
  const casesLength = cases.length

  const filterNumberVar = useCallback((varPayload: Var) => {
    return varPayload.type === VarType.number
  }, [])

  return (
    <>
      <ReactSortable
        list={cases.map(caseItem => ({ ...caseItem, id: caseItem.case_id }))}
        setList={handleSortCase}
        handle='.handle'
        ghostClass='bg-components-panel-bg'
        animation={150}
        disabled={readOnly || isSubVariable}
      >
        {
          cases.map((item, index) => (
            <div key={item.case_id}>
              <div
                className={cn(
                  'group relative rounded-[10px] bg-components-panel-bg',
                  willDeleteCaseId === item.case_id && 'bg-state-destructive-hover',
                  !isSubVariable && 'py-1 px-3 min-h-[40px] ',
                  isSubVariable && 'p-2 pr-1',
                )}
              >
                {!isSubVariable && (
                  <>
                    <RiDraggable className={cn(
                      'hidden handle absolute top-2 left-1 w-3 h-3 text-text-quaternary cursor-pointer',
                      casesLength > 1 && 'group-hover:block',
                    )} />
                    <div className={cn(
                      'absolute left-4 leading-4 text-[13px] font-semibold text-text-secondary',
                      casesLength === 1 ? 'top-2.5' : 'top-1',
                    )}>
                      {
                        index === 0 ? 'IF' : 'ELIF'
                      }
                      {
                        casesLength > 1 && (
                          <div className='text-[10px] text-text-tertiary font-medium'>CASE {index + 1}</div>
                        )
                      }
                    </div>
                  </>
                )}

                {
                  !!item.conditions.length && (
                    <div className='mb-2'>
                      <ConditionList
                        disabled={readOnly}
                        caseItem={item}
                        caseId={isSubVariable ? conditionParentCaseId! : item.case_id}
                        conditionId={parentConditionId}
                        onUpdateCondition={handleUpdateCondition}
                        onRemoveCondition={handleRemoveCondition}
                        onUpdateConditionLogicalOperator={handleUpdateConditionLogicalOperator}
                        nodesOutputVars={nodesOutputVars}
                        availableNodes={availableNodes}
                        numberVariables={getAvailableVars(id, '', filterNumberVar)}
                        varsIsVarFileAttribute={varsIsVarFileAttribute}
                        onAddSubVariableCondition={handleAddSubVariableCondition}
                        onUpdateSubVariableCondition={handleUpdateSubVariableCondition}
                        isSubVariable={isSubVariable}
                      />
                    </div>
                  )
                }

                <div className={cn(
                  'flex items-center justify-between pr-[30px]',
                  !item.conditions.length && !isSubVariable && 'mt-1',
                  !item.conditions.length && isSubVariable && 'mt-2',
                  !isSubVariable && ' pl-[60px]',
                )}>
                  {isSubVariable
                    ? (
                      <Button
                        size='small'
                        disabled={readOnly}
                        onClick={() => handleAddSubVariableCondition?.(conditionParentCaseId!, parentConditionId!)}
                      >
                        <RiAddLine className='mr-1 w-3.5 h-3.5' />
                        {t('workflow.nodes.ifElse.addSubVariable')}
                      </Button>
                    )
                    : (
                      <ConditionAdd
                        disabled={readOnly}
                        caseId={item.case_id}
                        variables={getAvailableVars(id, '', filterVar)}
                        onSelectVariable={handleAddCondition!}
                      />
                    )}

                  {
                    ((index === 0 && casesLength > 1) || (index > 0)) && (
                      <Button
                        className='hover:text-components-button-destructive-ghost-text hover:bg-components-button-destructive-ghost-bg-hover'
                        size='small'
                        variant='ghost'
                        disabled={readOnly}
                        onClick={() => handleRemoveCase(item.case_id)}
                        onMouseEnter={() => setWillDeleteCaseId(item.case_id)}
                        onMouseLeave={() => setWillDeleteCaseId('')}
                      >
                        <RiDeleteBinLine className='mr-1 w-3.5 h-3.5' />
                        {t('common.operation.remove')}
                      </Button>
                    )
                  }
                </div>
              </div>
              {!isSubVariable && (
                <div className='my-2 mx-3 h-[1px] bg-divider-subtle'></div>
              )}
            </div>
          ))
        }
      </ReactSortable>
      {(cases.length === 0) && (
        <Button
          size='small'
          disabled={readOnly}
          onClick={() => handleAddSubVariableCondition?.(conditionParentCaseId!, parentConditionId!)}
        >
          <RiAddLine className='mr-1 w-3.5 h-3.5' />
          {t('workflow.nodes.ifElse.addSubVariable')}
        </Button>
      )}
    </>
  )
}
export default React.memo(ConditionWrap)
