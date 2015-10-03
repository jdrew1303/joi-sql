module.exports = [ { tableCatalog: 'def',
    tableSchema: 'pwner',
    tableName: 'project',
    columnName: 'project_id',
    ordinalPosition: 1,
    columnDefault: null,
    isNullable: 'NO',
    dataType: 'int',
    characterMaximumLength: null,
    characterOctetLength: null,
    numericPrecision: 10,
    numericScale: 0,
    datetimePrecision: null,
    characterSetName: null,
    collationName: null,
    columnType: 'int(10) unsigned',
    columnKey: 'PRI',
    extra: 'auto_increment',
    privileges: 'select,insert,update,references',
    columnComment: '' },
  { tableCatalog: 'def',
    tableSchema: 'pwner',
    tableName: 'project',
    columnName: 'contact_id',
    ordinalPosition: 2,
    columnDefault: null,
    isNullable: 'NO',
    dataType: 'int',
    characterMaximumLength: null,
    characterOctetLength: null,
    numericPrecision: 10,
    numericScale: 0,
    datetimePrecision: null,
    characterSetName: null,
    collationName: null,
    columnType: 'int(10) unsigned',
    columnKey: 'MUL',
    extra: '',
    privileges: 'select,insert,update,references',
    columnComment: '' },
  { tableCatalog: 'def',
    tableSchema: 'pwner',
    tableName: 'project',
    columnName: 'date_created',
    ordinalPosition: 3,
    columnDefault: null,
    isNullable: 'NO',
    dataType: 'datetime',
    characterMaximumLength: null,
    characterOctetLength: null,
    numericPrecision: null,
    numericScale: null,
    datetimePrecision: 0,
    characterSetName: null,
    collationName: null,
    columnType: 'datetime',
    columnKey: '',
    extra: '',
    privileges: 'select,insert,update,references',
    columnComment: '' },
  { tableCatalog: 'def',
    tableSchema: 'pwner',
    tableName: 'project',
    columnName: 'engineer_id',
    ordinalPosition: 4,
    columnDefault: null,
    isNullable: 'YES',
    dataType: 'int',
    characterMaximumLength: null,
    characterOctetLength: null,
    numericPrecision: 10,
    numericScale: 0,
    datetimePrecision: null,
    characterSetName: null,
    collationName: null,
    columnType: 'int(10) unsigned',
    columnKey: 'MUL',
    extra: '',
    privileges: 'select,insert,update,references',
    columnComment: '' },
  { tableCatalog: 'def',
    tableSchema: 'pwner',
    tableName: 'project',
    columnName: 'name',
    ordinalPosition: 5,
    columnDefault: null,
    isNullable: 'NO',
    dataType: 'varchar',
    characterMaximumLength: 200,
    characterOctetLength: 600,
    numericPrecision: null,
    numericScale: null,
    datetimePrecision: null,
    characterSetName: 'utf8',
    collationName: 'utf8_general_ci',
    columnType: 'varchar(200)',
    columnKey: '',
    extra: '',
    privileges: 'select,insert,update,references',
    columnComment: '' },
  { tableCatalog: 'def',
    tableSchema: 'pwner',
    tableName: 'project',
    columnName: 'engineering_project',
    ordinalPosition: 6,
    columnDefault: null,
    isNullable: 'NO',
    dataType: 'bit',
    characterMaximumLength: null,
    characterOctetLength: null,
    numericPrecision: 1,
    numericScale: null,
    datetimePrecision: null,
    characterSetName: null,
    collationName: null,
    columnType: 'bit(1)',
    columnKey: '',
    extra: '',
    privileges: 'select,insert,update,references',
    columnComment: '' },
  { tableCatalog: 'def',
    tableSchema: 'pwner',
    tableName: 'project',
    columnName: 'printing_project',
    ordinalPosition: 7,
    columnDefault: null,
    isNullable: 'NO',
    dataType: 'bit',
    characterMaximumLength: null,
    characterOctetLength: null,
    numericPrecision: 1,
    numericScale: null,
    datetimePrecision: null,
    characterSetName: null,
    collationName: null,
    columnType: 'bit(1)',
    columnKey: '',
    extra: '',
    privileges: 'select,insert,update,references',
    columnComment: '' },
  { tableCatalog: 'def',
    tableSchema: 'pwner',
    tableName: 'project',
    columnName: 'active_project_state_id',
    ordinalPosition: 8,
    columnDefault: null,
    isNullable: 'NO',
    dataType: 'int',
    characterMaximumLength: null,
    characterOctetLength: null,
    numericPrecision: 10,
    numericScale: 0,
    datetimePrecision: null,
    characterSetName: null,
    collationName: null,
    columnType: 'int(10) unsigned',
    columnKey: '',
    extra: '',
    privileges: 'select,insert,update,references',
    columnComment: '' },
  { tableCatalog: 'def',
    tableSchema: 'pwner',
    tableName: 'project',
    columnName: 'start_date',
    ordinalPosition: 9,
    columnDefault: null,
    isNullable: 'YES',
    dataType: 'datetime',
    characterMaximumLength: null,
    characterOctetLength: null,
    numericPrecision: null,
    numericScale: null,
    datetimePrecision: 0,
    characterSetName: null,
    collationName: null,
    columnType: 'datetime',
    columnKey: 'MUL',
    extra: '',
    privileges: 'select,insert,update,references',
    columnComment: '' },
  { tableCatalog: 'def',
    tableSchema: 'pwner',
    tableName: 'project',
    columnName: 'done',
    ordinalPosition: 10,
    columnDefault: null,
    isNullable: 'NO',
    dataType: 'bit',
    characterMaximumLength: null,
    characterOctetLength: null,
    numericPrecision: 1,
    numericScale: null,
    datetimePrecision: null,
    characterSetName: null,
    collationName: null,
    columnType: 'bit(1)',
    columnKey: 'MUL',
    extra: '',
    privileges: 'select,insert,update,references',
    columnComment: '' },
  { tableCatalog: 'def',
    tableSchema: 'pwner',
    tableName: 'project',
    columnName: 'done_date',
    ordinalPosition: 11,
    columnDefault: null,
    isNullable: 'YES',
    dataType: 'datetime',
    characterMaximumLength: null,
    characterOctetLength: null,
    numericPrecision: null,
    numericScale: null,
    datetimePrecision: 0,
    characterSetName: null,
    collationName: null,
    columnType: 'datetime',
    columnKey: '',
    extra: '',
    privileges: 'select,insert,update,references',
    columnComment: '' },
  { tableCatalog: 'def',
    tableSchema: 'pwner',
    tableName: 'project',
    columnName: 'dead_reason',
    ordinalPosition: 12,
    columnDefault: null,
    isNullable: 'YES',
    dataType: 'text',
    characterMaximumLength: 65535,
    characterOctetLength: 65535,
    numericPrecision: null,
    numericScale: null,
    datetimePrecision: null,
    characterSetName: 'utf8',
    collationName: 'utf8_general_ci',
    columnType: 'text',
    columnKey: '',
    extra: '',
    privileges: 'select,insert,update,references',
    columnComment: '' },
  { tableCatalog: 'def',
    tableSchema: 'pwner',
    tableName: 'project',
    columnName: 'quoted_engineering_hours',
    ordinalPosition: 13,
    columnDefault: null,
    isNullable: 'YES',
    dataType: 'decimal',
    characterMaximumLength: null,
    characterOctetLength: null,
    numericPrecision: 5,
    numericScale: 1,
    datetimePrecision: null,
    characterSetName: null,
    collationName: null,
    columnType: 'decimal(5,1)',
    columnKey: '',
    extra: '',
    privileges: 'select,insert,update,references',
    columnComment: '' },
  { tableCatalog: 'def',
    tableSchema: 'pwner',
    tableName: 'project',
    columnName: 'actual_engineering_hours',
    ordinalPosition: 14,
    columnDefault: null,
    isNullable: 'YES',
    dataType: 'decimal',
    characterMaximumLength: null,
    characterOctetLength: null,
    numericPrecision: 5,
    numericScale: 1,
    datetimePrecision: null,
    characterSetName: null,
    collationName: null,
    columnType: 'decimal(5,1)',
    columnKey: '',
    extra: '',
    privileges: 'select,insert,update,references',
    columnComment: '' },
  { tableCatalog: 'def',
    tableSchema: 'pwner',
    tableName: 'project',
    columnName: 'engineering_due_date',
    ordinalPosition: 15,
    columnDefault: null,
    isNullable: 'YES',
    dataType: 'date',
    characterMaximumLength: null,
    characterOctetLength: null,
    numericPrecision: null,
    numericScale: null,
    datetimePrecision: null,
    characterSetName: null,
    collationName: null,
    columnType: 'date',
    columnKey: '',
    extra: '',
    privileges: 'select,insert,update,references',
    columnComment: '' },
  { tableCatalog: 'def',
    tableSchema: 'pwner',
    tableName: 'project',
    columnName: 'print_parts',
    ordinalPosition: 16,
    columnDefault: null,
    isNullable: 'YES',
    dataType: 'text',
    characterMaximumLength: 65535,
    characterOctetLength: 65535,
    numericPrecision: null,
    numericScale: null,
    datetimePrecision: null,
    characterSetName: 'utf8',
    collationName: 'utf8_general_ci',
    columnType: 'text',
    columnKey: '',
    extra: '',
    privileges: 'select,insert,update,references',
    columnComment: '' },
  { tableCatalog: 'def',
    tableSchema: 'pwner',
    tableName: 'project',
    columnName: 'print_quantity',
    ordinalPosition: 17,
    columnDefault: null,
    isNullable: 'YES',
    dataType: 'mediumint',
    characterMaximumLength: null,
    characterOctetLength: null,
    numericPrecision: 7,
    numericScale: 0,
    datetimePrecision: null,
    characterSetName: null,
    collationName: null,
    columnType: 'mediumint(9)',
    columnKey: '',
    extra: '',
    privileges: 'select,insert,update,references',
    columnComment: '' },
  { tableCatalog: 'def',
    tableSchema: 'pwner',
    tableName: 'project',
    columnName: 'print_time_hours',
    ordinalPosition: 18,
    columnDefault: null,
    isNullable: 'YES',
    dataType: 'decimal',
    characterMaximumLength: null,
    characterOctetLength: null,
    numericPrecision: 5,
    numericScale: 1,
    datetimePrecision: null,
    characterSetName: null,
    collationName: null,
    columnType: 'decimal(5,1)',
    columnKey: '',
    extra: '',
    privileges: 'select,insert,update,references',
    columnComment: '' },
  { tableCatalog: 'def',
    tableSchema: 'pwner',
    tableName: 'project',
    columnName: 'print_due_date',
    ordinalPosition: 19,
    columnDefault: null,
    isNullable: 'YES',
    dataType: 'date',
    characterMaximumLength: null,
    characterOctetLength: null,
    numericPrecision: null,
    numericScale: null,
    datetimePrecision: null,
    characterSetName: null,
    collationName: null,
    columnType: 'date',
    columnKey: '',
    extra: '',
    privileges: 'select,insert,update,references',
    columnComment: '' },
  { tableCatalog: 'def',
    tableSchema: 'pwner',
    tableName: 'project',
    columnName: 'payment_received',
    ordinalPosition: 20,
    columnDefault: null,
    isNullable: 'NO',
    dataType: 'bit',
    characterMaximumLength: null,
    characterOctetLength: null,
    numericPrecision: 1,
    numericScale: null,
    datetimePrecision: null,
    characterSetName: null,
    collationName: null,
    columnType: 'bit(1)',
    columnKey: '',
    extra: '',
    privileges: 'select,insert,update,references',
    columnComment: '' },
  { tableCatalog: 'def',
    tableSchema: 'pwner',
    tableName: 'project',
    columnName: 'contact_date',
    ordinalPosition: 21,
    columnDefault: null,
    isNullable: 'YES',
    dataType: 'date',
    characterMaximumLength: null,
    characterOctetLength: null,
    numericPrecision: null,
    numericScale: null,
    datetimePrecision: null,
    characterSetName: null,
    collationName: null,
    columnType: 'date',
    columnKey: '',
    extra: '',
    privileges: 'select,insert,update,references',
    columnComment: '' },
  { tableCatalog: 'def',
    tableSchema: 'pwner',
    tableName: 'project',
    columnName: 'reply_date',
    ordinalPosition: 22,
    columnDefault: null,
    isNullable: 'YES',
    dataType: 'date',
    characterMaximumLength: null,
    characterOctetLength: null,
    numericPrecision: null,
    numericScale: null,
    datetimePrecision: null,
    characterSetName: null,
    collationName: null,
    columnType: 'date',
    columnKey: '',
    extra: '',
    privileges: 'select,insert,update,references',
    columnComment: '' },
  { tableCatalog: 'def',
    tableSchema: 'pwner',
    tableName: 'project',
    columnName: 'quote_date',
    ordinalPosition: 23,
    columnDefault: null,
    isNullable: 'YES',
    dataType: 'date',
    characterMaximumLength: null,
    characterOctetLength: null,
    numericPrecision: null,
    numericScale: null,
    datetimePrecision: null,
    characterSetName: null,
    collationName: null,
    columnType: 'date',
    columnKey: '',
    extra: '',
    privileges: 'select,insert,update,references',
    columnComment: '' },
  { tableCatalog: 'def',
    tableSchema: 'pwner',
    tableName: 'project',
    columnName: 'follow_up_date',
    ordinalPosition: 24,
    columnDefault: null,
    isNullable: 'YES',
    dataType: 'date',
    characterMaximumLength: null,
    characterOctetLength: null,
    numericPrecision: null,
    numericScale: null,
    datetimePrecision: null,
    characterSetName: null,
    collationName: null,
    columnType: 'date',
    columnKey: '',
    extra: '',
    privileges: 'select,insert,update,references',
    columnComment: '' },
  { tableCatalog: 'def',
    tableSchema: 'pwner',
    tableName: 'project',
    columnName: 'notes',
    ordinalPosition: 25,
    columnDefault: null,
    isNullable: 'YES',
    dataType: 'text',
    characterMaximumLength: 65535,
    characterOctetLength: 65535,
    numericPrecision: null,
    numericScale: null,
    datetimePrecision: null,
    characterSetName: 'utf8',
    collationName: 'utf8_general_ci',
    columnType: 'text',
    columnKey: '',
    extra: '',
    privileges: 'select,insert,update,references',
    columnComment: '' },
  { tableCatalog: 'def',
    tableSchema: 'pwner',
    tableName: 'project',
    columnName: 'version',
    ordinalPosition: 26,
    columnDefault: '1',
    isNullable: 'NO',
    dataType: 'int',
    characterMaximumLength: null,
    characterOctetLength: null,
    numericPrecision: 10,
    numericScale: 0,
    datetimePrecision: null,
    characterSetName: null,
    collationName: null,
    columnType: 'int(10) unsigned',
    columnKey: '',
    extra: '',
    privileges: 'select,insert,update,references',
    columnComment: '' },
  { columnName: 'customer_type',
    dataType: 'enum',
    columnType: 'enum(\'recreational\',\'medical\',\'wholesale\')',
    numericPrecision: null,
    numericScale: null,
    characterMaximumLength: 12 } ]
