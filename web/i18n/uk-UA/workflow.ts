const translation = {
  common: {
    undo: 'Скасувати',
    redo: 'Повторити',
    editing: 'Редагування',
    autoSaved: 'Автоматично збережено',
    unpublished: 'Неопубліковано',
    published: 'Опубліковано',
    publish: 'Опублікувати',
    update: 'Оновити',
    run: 'Запустити',
    running: 'Запущено',
    inRunMode: 'У режимі запуску',
    inPreview: 'У режимі попереднього перегляду',
    inPreviewMode: 'У режимі попереднього перегляду',
    preview: 'Попередній перегляд',
    viewRunHistory: 'Переглянути історію запусків',
    runHistory: 'Історія запусків',
    goBackToEdit: 'Повернутися до редактора',
    conversationLog: 'Журнал розмов',
    features: 'Функції',
    debugAndPreview: 'Попередній перегляд',
    restart: 'Перезапустити',
    currentDraft: 'Поточний чернетка',
    currentDraftUnpublished: 'Поточний чернетка неопублікований',
    latestPublished: 'Останнє опубліковане',
    publishedAt: 'Опубліковано о',
    restore: 'Відновити',
    runApp: 'Запустити додаток',
    batchRunApp: 'Пакетний запуск додатку',
    accessAPIReference: 'Доступ до довідника API',
    embedIntoSite: 'Вбудувати на сайт',
    addTitle: 'Додати заголовок...',
    addDescription: 'Додати опис...',
    noVar: 'Без змінної',
    searchVar: 'Пошук змінної',
    variableNamePlaceholder: 'Назва змінної',
    setVarValuePlaceholder: 'Встановити значення змінної',
    needConnectTip: 'Цей крок ні до чого не підключений',
    maxTreeDepth: 'Максимальний ліміт {{depth}} вузлів на гілку',
    needEndNode: 'Потрібно додати кінцевий блок',
    needAnswerNode: 'Потрібно додати блок відповіді',
    workflowProcess: 'Процес робочого потоку',
    notRunning: 'Ще не запущено',
    previewPlaceholder: 'Введіть вміст у поле нижче, щоб розпочати налагодження чат-бота',
    effectVarConfirm: {
      title: 'Видалити змінну',
      content: 'Змінна використовується в інших вузлах. Ви все ще хочете її видалити?',
    },
    insertVarTip: 'Натисніть клавішу \'/\' для швидкого вставлення',
    processData: 'Обробити дані',
    input: 'Вхід',
    output: 'Вихід',
    jinjaEditorPlaceholder: 'Введіть \'/\' або \'{\' для вставлення змінної',
    viewOnly: 'Тільки перегляд',
    showRunHistory: 'Показати історію запусків',
    enableJinja: 'Увімкнути підтримку шаблонів Jinja',
    learnMore: 'Дізнатися більше',
    copy: 'Копіювати',
    duplicate: 'Дублювати',
    addBlock: 'Додати блок',
    pasteHere: 'Вставити сюди',
    pointerMode: 'Режим вказівника',
    handMode: 'Ручний режим',
    model: 'Модель',
    workflowAsTool: 'Робочий потік як інструмент',
    configureRequired: 'Потрібна конфігурація',
    configure: 'Налаштувати',
    manageInTools: 'Керування в інструментах',
    workflowAsToolTip: 'Після оновлення робочого потоку необхідна переконфігурація інструменту.',
    viewDetailInTracingPanel: 'Переглянути деталі',
    importSuccess: 'Успіх імпорту',
    overwriteAndImport: 'Перезапис та імпорт',
    importFailure: 'Помилка імпорту',
    importDSL: 'Імпорт DSL',
    syncingData: 'Синхронізація даних, всього за кілька секунд.',
    chooseDSL: 'Виберіть файл DSL(yml)',
    backupCurrentDraft: 'Резервна поточна чернетка',
    importDSLTip: 'Поточна чернетка буде перезаписана. Експортуйте робочий процес як резервну копію перед імпортом.',
  },
  env: {
    envPanelTitle: 'Змінні середовища',
    envDescription: 'Змінні середовища можуть використовуватися для зберігання приватної інформації та облікових даних. Вони доступні лише для читання і можуть бути відокремлені від файлу DSL під час експорту.',
    envPanelButton: 'Додати змінну',
    modal: {
      title: 'Додати змінну середовища',
      editTitle: 'Редагувати змінну середовища',
      type: 'Тип',
      name: 'Назва',
      namePlaceholder: 'назва середовища',
      value: 'Значення',
      valuePlaceholder: 'значення середовища',
      secretTip: 'Використовується для визначення конфіденційної інформації або даних, з налаштуваннями DSL, сконфігурованими для запобігання витоку.',
    },
    export: {
      title: 'Експортувати секретні змінні середовища?',
      checkbox: 'Експортувати секретні значення',
      ignore: 'Експортувати DSL',
      export: 'Експортувати DSL з секретними значеннями',
    },
  },
  chatVariable: {
    panelTitle: 'Змінні розмови',
    panelDescription: 'Змінні розмови використовуються для зберігання інтерактивної інформації, яку LLM повинен пам\'ятати, включаючи історію розмови, завантажені файли, вподобання користувача. Вони доступні для читання та запису.',
    docLink: 'Відвідайте нашу документацію, щоб дізнатися більше.',
    button: 'Додати змінну',
    modal: {
      title: 'Додати змінну розмови',
      editTitle: 'Редагувати змінну розмови',
      name: 'Назва',
      namePlaceholder: 'Назва змінної',
      type: 'Тип',
      value: 'Значення за замовчуванням',
      valuePlaceholder: 'Значення за замовчуванням, залиште порожнім, щоб не встановлювати',
      description: 'Опис',
      descriptionPlaceholder: 'Опишіть змінну',
      editInJSON: 'Редагувати в JSON',
      oneByOne: 'Додавати по одному',
      editInForm: 'Редагувати у формі',
      arrayValue: 'Значення',
      addArrayValue: 'Додати значення',
      objectKey: 'Ключ',
      objectType: 'Тип',
      objectValue: 'Значення за замовчуванням',
    },
    storedContent: 'Збережений вміст',
    updatedAt: 'Оновлено ',
  },
  changeHistory: {
    title: 'Історія змін',
    placeholder: 'Ви ще нічого не змінили',
    clearHistory: 'Очистити історію',
    hint: 'Підказка',
    hintText: 'Дії редагування відстежуються в історії змін, яка зберігається на вашому пристрої протягом цієї сесії. Ця історія буде видалена після виходу з редактора.',
    stepBackward_one: '{{count}} крок назад',
    stepBackward_other: '{{count}} кроки назад',
    stepForward_one: '{{count}} крок вперед',
    stepForward_other: '{{count}} кроки вперед',
    sessionStart: 'Початок сесії',
    currentState: 'Поточний стан',
    nodeTitleChange: 'Назву блоку змінено',
    nodeDescriptionChange: 'Опис блоку змінено',
    nodeDragStop: 'Блок переміщено',
    nodeChange: 'Блок змінено',
    nodeConnect: 'Блок підключено',
    nodePaste: 'Блок вставлено',
    nodeDelete: 'Блок видалено',
    nodeAdd: 'Блок додано',
    nodeResize: 'Розмір блоку змінено',
    noteAdd: 'Додано нотатку',
    noteChange: 'Нотатку змінено',
    noteDelete: 'Нотатку видалено',
    edgeDelete: 'Блок відключено',
  },
  errorMsg: {
    fieldRequired: '{{field}} є обов\'язковим',
    authRequired: 'Потрібна авторизація',
    invalidJson: '{{field}} є недійсним JSON',
    fields: {
      variable: 'Назва змінної',
      variableValue: 'Значення змінної',
      code: 'Код',
      model: 'Модель',
      rerankModel: 'Модель повторного ранжування',
    },
    invalidVariable: 'Недійсна змінна',
  },
  singleRun: {
    testRun: 'Тестовий запуск',
    startRun: 'Почати запуск',
    running: 'Запущено',
    testRunIteration: 'Ітерація тестового запуску',
    back: 'Назад',
    iteration: 'Ітерація',
  },
  tabs: {
    'searchBlock': 'Пошук блоку',
    'blocks': 'Блоки',
    'tools': 'Інструменти',
    'allTool': 'Усі',
    'builtInTool': 'Вбудовані',
    'customTool': 'Користувацькі',
    'workflowTool': 'Робочий потік',
    'question-understand': 'Розуміння питань',
    'logic': 'Логіка',
    'transform': 'Трансформація',
    'utilities': 'Утиліти',
    'noResult': 'Нічого не знайдено',
    'searchTool': 'Інструмент пошуку',
  },
  blocks: {
    'start': 'Початок',
    'end': 'Кінець',
    'answer': 'Відповідь',
    'llm': 'LLM',
    'knowledge-retrieval': 'Отримання знань',
    'question-classifier': 'Класифікатор питань',
    'if-else': 'ЯКЩО/ІНАКШЕ',
    'code': 'Код',
    'template-transform': 'Шаблон',
    'http-request': 'HTTP-запит',
    'variable-assigner': 'Присвоювач змінних',
    'variable-aggregator': 'Агрегатор змінних',
    'assigner': 'Призначувач змінних',
    'iteration-start': 'Початок ітерації',
    'iteration': 'Ітерація',
    'parameter-extractor': 'Екстрактор параметрів',
  },
  blocksAbout: {
    'start': 'Визначте початкові параметри для запуску робочого потоку',
    'end': 'Визначте кінець і тип результату робочого потоку',
    'answer': 'Визначте зміст відповіді у чаті',
    'llm': 'Виклик великих мовних моделей для відповіді на запитання або обробки природної мови',
    'knowledge-retrieval': 'Дозволяє виконувати запити текстового вмісту, пов\'язаного із запитаннями користувача, з бази знань',
    'question-classifier': 'Визначте умови класифікації запитань користувачів, LLM може визначати, як розвивається розмова на основі опису класифікації',
    'if-else': 'Дозволяє розділити робочий потік на дві гілки на основі умов if/else',
    'code': 'Виконайте фрагмент коду Python або NodeJS для реалізації користувацької логіки',
    'template-transform': 'Перетворіть дані на рядок за допомогою синтаксису шаблону Jinja',
    'http-request': 'Дозволяє відправляти серверні запити через протокол HTTP',
    'variable-assigner': 'Агрегує змінні з кількох гілок у одну змінну для уніфікованої конфігурації кінцевих вузлів.',
    'assigner': 'Вузол призначення змінних використовується для присвоєння значень записуваним змінним (таким як змінні розмови).',
    'variable-aggregator': 'Агрегує змінні з кількох гілок у одну змінну для уніфікованої конфігурації кінцевих вузлів.',
    'iteration': 'Виконувати кілька кроків на об\'єкті списку, поки не буде виведено всі результати.',
    'parameter-extractor': 'Використовуйте LLM для вилучення структурованих параметрів з природної мови для викликів інструментів або HTTP-запитів.',
  },
  operator: {
    zoomIn: 'Збільшити',
    zoomOut: 'Зменшити',
    zoomTo50: 'Збільшити до 50%',
    zoomTo100: 'Збільшити до 100%',
    zoomToFit: 'Збільшити для підгонки',
  },
  panel: {
    userInputField: 'Поле введення користувача',
    changeBlock: 'Змінити блок',
    helpLink: 'Посилання на допомогу',
    about: 'Про',
    createdBy: 'Створено ',
    nextStep: 'Наступний крок',
    addNextStep: 'Додати наступний блок у цей робочий потік',
    selectNextStep: 'Вибрати наступний блок',
    runThisStep: 'Запустити цей крок',
    checklist: 'Контрольний список',
    checklistTip: 'Переконайтеся, що всі проблеми вирішені перед публікацією',
    checklistResolved: 'Всі проблеми вирішені',
    organizeBlocks: 'Організувати блоки',
    change: 'Змінити',
    optional: '(необов\'язково)',
  },
  nodes: {
    common: {
      outputVars: 'Змінні виходу',
      insertVarTip: 'Вставити змінну',
      memory: {
        memory: 'Пам\'ять',
        memoryTip: 'Налаштування пам\'яті чату',
        windowSize: 'Розмір вікна',
        conversationRoleName: 'Назва ролі у розмові',
        user: 'Префікс користувача',
        assistant: 'Префікс помічника',
      },
      memories: {
        title: 'Спогади',
        tip: 'Пам\'ять чату',
        builtIn: 'Вбудовано',
      },
    },
    start: {
      required: 'обов\'язковий',
      inputField: 'Поле введення',
      builtInVar: 'Вбудовані змінні',
      outputVars: {
        query: 'Введення користувача',
        memories: {
          des: 'Історія розмов',
          type: 'тип повідомлення',
          content: 'вміст повідомлення',
        },
        files: 'Список файлів',
      },
      noVarTip: 'Встановіть вхідні дані, які можуть бути використані у робочому потоці',
    },
    end: {
      outputs: 'Виходи',
      output: {
        type: 'тип виходу',
        variable: 'змінна виходу',
      },
      type: {
        'none': 'Немає',
        'plain-text': 'Простий текст',
        'structured': 'Структурований',
      },
    },
    answer: {
      answer: 'Відповідь',
      outputVars: 'Змінні виходу',
    },
    llm: {
      model: 'модель',
      variables: 'змінні',
      context: 'контекст',
      contextTooltip: 'Ви можете імпортувати знання як контекст',
      notSetContextInPromptTip: 'Щоб увімкнути функцію контексту, заповніть змінну контексту в PROMPT.',
      prompt: 'prompt',
      roleDescription: {
        system: 'Дайте високорівневі інструкції для розмови',
        user: 'Надайте інструкції, запити або будь-який текстовий вхід для моделі',
        assistant: 'Відповіді моделі на основі повідомлень користувача',
      },
      addMessage: 'Додати повідомлення',
      vision: 'бачення',
      files: 'Файли',
      resolution: {
        name: 'Роздільна здатність',
        high: 'Висока',
        low: 'Низька',
      },
      outputVars: {
        output: 'Генерований вміст',
        usage: 'Інформація про використання моделі',
      },
      singleRun: {
        variable: 'Змінна',
      },
      sysQueryInUser: 'sys.query у повідомленні користувача є обов\'язковим',
    },
    knowledgeRetrieval: {
      queryVariable: 'Змінна запиту',
      knowledge: 'Знання',
      outputVars: {
        output: 'Відновлені сегментовані дані',
        content: 'Сегментований вміст',
        title: 'Сегментований заголовок',
        icon: 'Сегментована піктограма',
        url: 'Сегментована URL',
        metadata: 'Інші метадані',
      },
    },
    http: {
      inputVars: 'Вхідні змінні',
      api: 'API',
      apiPlaceholder: 'Введіть URL, введіть ‘/’, щоб вставити змінну',
      notStartWithHttp: 'API має починатися з http:// або https://',
      key: 'Ключ',
      value: 'Значення',
      bulkEdit: 'Масове редагування',
      keyValueEdit: 'Редагування ключ-значення',
      headers: 'Заголовки',
      params: 'Параметри',
      body: 'Тіло',
      outputVars: {
        body: 'Зміст відповіді',
        statusCode: 'Код стану відповіді',
        headers: 'Список заголовків відповіді у форматі JSON',
        files: 'Список файлів',
      },
      authorization: {
        'authorization': 'Авторизація',
        'authorizationType': 'Тип авторизації',
        'no-auth': 'Немає',
        'api-key': 'API-ключ',
        'auth-type': 'Тип аутентифікації',
        'basic': 'Базовий',
        'bearer': 'Bearer',
        'custom': 'Користувацький',
        'api-key-title': 'API-ключ',
        'header': 'Заголовок',
      },
      insertVarPlaceholder: 'введіть \'/\', щоб вставити змінну',
      timeout: {
        title: 'Тайм-аут',
        connectLabel: 'Тайм-аут підключення',
        connectPlaceholder: 'Введіть тайм-аут підключення в секундах',
        readLabel: 'Тайм-аут читання',
        readPlaceholder: 'Введіть тайм-аут читання в секундах',
        writeLabel: 'Тайм-аут запису',
        writePlaceholder: 'Введіть тайм-аут запису в секундах',
      },
    },
    code: {
      inputVars: 'Вхідні змінні',
      outputVars: 'Змінні виходу',
      advancedDependencies: 'Розширені залежності',
      advancedDependenciesTip: 'Додайте тут деякі попередньо завантажені залежності, які потребують більше часу для споживання або не є за замовчуванням вбудованими',
      searchDependencies: 'Шукати залежності',
    },
    templateTransform: {
      inputVars: 'Вхідні змінні',
      code: 'Код',
      codeSupportTip: 'Підтримує лише Jinja2',
      outputVars: {
        output: 'Трансформований вміст',
      },
    },
    ifElse: {
      if: 'Якщо',
      else: 'Інакше',
      elseDescription: 'Використовується для визначення логіки, яка має бути виконана, коли умова if не виконана.',
      and: 'і',
      or: 'або',
      operator: 'Оператор',
      notSetVariable: 'Будь ласка, спочатку встановіть змінну',
      comparisonOperator: {
        'contains': 'містить',
        'not contains': 'не містить',
        'start with': 'починається з',
        'end with': 'закінчується на',
        'is': 'є',
        'is not': 'не є',
        'empty': 'порожній',
        'not empty': 'не порожній',
        'null': 'є null',
        'not null': 'не є null',
        'regex match': 'Регулярний вираз збігу',
      },
      enterValue: 'Введіть значення',
      addCondition: 'Додати умову',
      conditionNotSetup: 'Умова НЕ налаштована',
      selectVariable: 'Виберіть змінну...',
    },
    variableAssigner: {
      title: 'Присвоєння змінних',
      outputType: 'Тип виходу',
      varNotSet: 'Змінна не встановлена',
      noVarTip: 'Додайте змінні для присвоєння',
      type: {
        string: 'Рядок',
        number: 'Число',
        object: 'Об\'єкт',
        array: 'Масив',
      },
      aggregationGroup: 'Група агрегації',
      aggregationGroupTip: 'Увімкнення цієї функції дозволяє агрегатору змінних агрегувати кілька наборів змінних.',
      addGroup: 'Додати групу',
      outputVars: {
        varDescribe: 'Вихід {{groupName}}',
      },
      setAssignVariable: 'Встановити змінну присвоєння',
    },
    assigner: {
      'assignedVariable': 'Призначена Змінна',
      'writeMode': 'Режим Запису',
      'writeModeTip': 'Коли ПРИЗНАЧЕНА ЗМІННА є масивом, режим додавання додає в кінець.',
      'over-write': 'Перезаписати',
      'append': 'Додати',
      'plus': 'Плюс',
      'clear': 'Очистити',
      'setVariable': 'Встановити Змінну',
      'variable': 'Змінна',
    },
    tool: {
      toAuthorize: 'Авторизувати',
      inputVars: 'Вхідні змінні',
      outputVars: {
        text: 'генерований вміст інструменту',
        files: {
          title: 'файли, генеровані інструментом',
          type: 'Тип підтримки. Наразі підтримуються лише зображення',
          transfer_method: 'Метод передачі. Значення - remote_url або local_file',
          url: 'URL зображення',
          upload_file_id: 'ID завантаженого файлу',
        },
        json: 'JSON, згенерований інструментом',
      },
    },
    questionClassifiers: {
      model: 'модель',
      inputVars: 'Вхідні змінні',
      outputVars: {
        className: 'Назва класу',
      },
      class: 'Клас',
      classNamePlaceholder: 'Напишіть назву вашого класу',
      advancedSetting: 'Розширене налаштування',
      topicName: 'Назва теми',
      topicPlaceholder: 'Напишіть назву вашої теми',
      addClass: 'Додати клас',
      instruction: 'Інструкція',
      instructionTip: 'Введіть додаткові інструкції, щоб допомогти класифікатору запитань краще зрозуміти, як категоризувати запитання.',
      instructionPlaceholder: 'Напишіть вашу інструкцію',
    },
    parameterExtractor: {
      inputVar: 'Вхідна змінна',
      extractParameters: 'Витягти параметри',
      importFromTool: 'Імпорт з інструментів',
      addExtractParameter: 'Додати параметр витягування',
      addExtractParameterContent: {
        name: 'Ім\'я',
        namePlaceholder: 'Ім\'я параметра витягування',
        type: 'Тип',
        typePlaceholder: 'Тип параметра витягування',
        description: 'Опис',
        descriptionPlaceholder: 'Опис параметра витягування',
        required: 'Обов\'язковий',
        requiredContent: 'Обов\'язковий використовується лише як посилання для інференції моделі і не для обов\'язкової валідації вихідного параметра.',
      },
      extractParametersNotSet: 'Параметри витягування не налаштовані',
      instruction: 'Інструкція',
      instructionTip: 'Введіть додаткові інструкції, щоб допомогти екстрактору параметрів зрозуміти, як витягувати параметри.',
      advancedSetting: 'Розширене налаштування',
      reasoningMode: 'Режим інференції',
      reasoningModeTip: 'Ви можете вибрати відповідний режим інференції залежно від здатності моделі реагувати на інструкції щодо викликів функцій або запитів.',
      isSuccess: 'Є успіх. У разі успіху значення 1, у разі невдачі значення 0.',
      errorReason: 'Причина помилки',
    },
    iteration: {
      deleteTitle: 'Видалити вузол ітерації?',
      deleteDesc: 'Видалення вузла ітерації видалить усі дочірні вузли',
      input: 'Вхід',
      output: 'Змінні виходу',
      iteration_one: '{{count}} Ітерація',
      iteration_other: '{{count}} Ітерацій',
      currentIteration: 'Поточна ітерація',
    },
    note: {
      editor: {
        large: 'Великий',
        bold: 'Жирний',
        openLink: 'Відкривати',
        small: 'Малий',
        link: 'Посилання',
        italic: 'Курсив',
        placeholder: 'Напишіть свою замітку...',
        strikethrough: 'Закреслені',
        medium: 'Середнє',
        showAuthor: 'Показати автора',
        bulletList: 'Маркований список',
        enterUrl: 'Введіть URL-адресу...',
        unlink: 'Від\'єднати',
        invalidUrl: 'Невірна URL-адреса',
      },
      addNote: 'Додати примітку',
    },
  },
  tracing: {
    stopBy: 'Зупинено користувачем {{user}}',
  },
}

export default translation
