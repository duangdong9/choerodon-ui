import Mock from 'mockjs';

const mockTemple = {
  rows: [
    {
      expand: false,
      functionCode: 'EMPLOYEE_REACT',
      icon: 'record_test',
      id: 7,
      ischecked: true,
      score: 10,
      shortcutId: null,
      text: '员工管理(react)',
      url: 'hap-core/hr/employee',
      symbol: '1',
      parentId: 2,
    },
    {
      expand: false,
      functionCode: 'HR_UNIT',
      icon: 'fa fa-cube',
      id: 73,
      ischecked: true,
      score: 10,
      shortcutId: null,
      text: '组织管理',
      url: 'hr/org_unit.html',
      symbol: '0',
      parentId: 2,
    },
    {
      expand: false,
      functionCode: 'COMPANY_REACT',
      icon: 'mail_set',
      id: 12,
      ischecked: true,
      score: 10,
      shortcutId: null,
      text: '公司管理(react)',
      url: 'hap-core/hr/company',
      symbol: '1',
      parentId: 2,
    },
    {
      expand: false,
      functionCode: 'ORGUNIT_REACT',
      icon: 'authority',
      id: 5,
      ischecked: true,
      score: 10,
      shortcutId: null,
      text: '组织管理(react)',
      url: 'hap-core/hr/orgunit',
      symbol: '1',
      parentId: 2,
    },
    {
      expand: false,
      functionCode: 'POSITION_REACT',
      icon: 'agile_subtask',
      id: 6,
      ischecked: true,
      score: 10,
      shortcutId: null,
      text: '岗位管理(react)',
      url: 'hap-core/hr/position',
      symbol: '1',
      parentId: 2,
    },
    {
      expand: false,
      functionCode: 'HR_POSITION',
      icon: 'fa fa-user-secret',
      id: 75,
      ischecked: true,
      score: 20,
      shortcutId: null,
      text: '岗位管理',
      url: 'hr/position.html',
      symbol: '0',
      parentId: 2,
    },
    {
      expand: false,
      functionCode: 'HR_EMPLOYEE',
      icon: 'fa fa-user',
      id: 74,
      ischecked: true,
      score: 30,
      shortcutId: null,
      text: '员工管理',
      url: 'hr/employee.html',
      symbol: '0',
      parentId: 2,
    },
    {
      expand: false,
      functionCode: 'FND_COMPANY',
      icon: 'fa fa-cube',
      id: 76,
      ischecked: null,
      score: 40,
      shortcutId: null,
      text: '公司管理',
      url: 'fnd/company.html',
      symbol: '0',
      parentId: 2,
    },
    {
      expand: false,
      functionCode: 'HR',
      icon: 'fa fa-cubes',
      id: 2,
      ischecked: null,
      score: 10,
      shortcutId: null,
      text: '组织架构',
      url: null,
      symbol: '0',
    },
    {
      expand: false,
      functionCode: 'SYS_REPORT_LIST',
      icon: 'fa fa-user',
      id: 25,
      ischecked: true,
      score: 10,
      shortcutId: null,
      text: '报表定义',
      url: 'rpt/report.html',
      symbol: '0',
      parentId: 24,
    },
    {
      expand: false,
      functionCode: 'SYS_REPORT_DESIGN',
      icon: 'fa fa-user',
      id: 26,
      ischecked: true,
      score: 10,
      shortcutId: null,
      text: '报表设计',
      url: 'ureport/designer',
      symbol: '0',
      parentId: 24,
    },
    {
      expand: false,
      functionCode: 'SYS_REPORT_MANAGE',
      icon: 'fa fa-user',
      id: 24,
      ischecked: true,
      score: 10,
      shortcutId: null,
      text: '报表管理',
      url: null,
      symbol: '0',
    },
    {
      expand: false,
      functionCode: 'ATTACH_CATEGORY',
      icon: 'fa fa-folder-open',
      id: 72,
      ischecked: true,
      score: 10,
      shortcutId: null,
      text: '目录管理',
      url: 'attach/sys_attach_category_manage.html',
      symbol: '0',
      parentId: 69,
    },
    {
      expand: false,
      functionCode: 'ATTACH_FILE',
      icon: 'fa fa-file',
      id: 70,
      ischecked: true,
      score: 20,
      shortcutId: null,
      text: '文件管理',
      url: 'attach/sys_file_manage.html',
      symbol: '0',
      parentId: 69,
    },
    {
      expand: false,
      functionCode: 'ATTACH_TEST',
      icon: 'fa fa-file',
      id: 71,
      ischecked: true,
      score: 30,
      shortcutId: null,
      text: '上传测试',
      url: 'attach/sys_attachment_create.html',
      symbol: '0',
      parentId: 69,
    },
    {
      expand: false,
      functionCode: 'ATTACH',
      icon: 'fa fa-cloud-upload',
      id: 69,
      ischecked: true,
      score: 30,
      shortcutId: null,
      text: '附件管理',
      url: null,
      symbol: '0',
    },
    {
      expand: false,
      functionCode: 'JOB_DETAIL',
      icon: 'fa fa-tasks',
      id: 17,
      ischecked: true,
      score: 10,
      shortcutId: null,
      text: '任务明细',
      url: 'job/job_detail.html',
      symbol: '0',
      parentId: 16,
    },
    {
      expand: false,
      functionCode: 'JOB_RUNNING_INFO',
      icon: 'fa fa-list-ul',
      id: 18,
      ischecked: true,
      score: 20,
      shortcutId: null,
      text: '执行记录',
      url: 'job/job_running_info.html',
      symbol: '0',
      parentId: 16,
    },
    {
      expand: false,
      functionCode: 'JOB',
      icon: 'fa fa-clock-o',
      id: 16,
      ischecked: true,
      score: 40,
      shortcutId: null,
      text: '计划任务',
      url: null,
      symbol: '0',
    },
    {
      expand: false,
      functionCode: 'WFL_AUTO_DELEGATE',
      icon: 'fa fa-user-plus',
      id: 44,
      ischecked: true,
      score: 5,
      shortcutId: null,
      text: '自动转交配置',
      url: 'activiti/auto_delegate_config.html',
      symbol: '0',
      parentId: 39,
    },
    {
      expand: false,
      functionCode: 'WFL_MY_START',
      icon: 'fa fa-share',
      id: 41,
      ischecked: true,
      score: 10,
      shortcutId: null,
      text: '我发起的流程',
      url: 'wfl/activiti/process_history_start.html',
      symbol: '0',
      parentId: 39,
    },
    {
      expand: false,
      functionCode: 'WFL_MY_TASK',
      icon: 'fa fa-check-square-o',
      id: 42,
      ischecked: true,
      score: 10,
      shortcutId: null,
      text: '我的待办列表',
      url: 'activiti/my_task.html',
      symbol: '0',
      parentId: 39,
    },
    {
      expand: false,
      functionCode: 'WFL_HISROTY',
      icon: 'fa fa-history',
      id: 43,
      ischecked: true,
      score: 20,
      shortcutId: null,
      text: '我参与的流程',
      url: 'activiti/process_history.html',
      symbol: '0',
      parentId: 39,
    },
    {
      expand: false,
      functionCode: 'WFL_CARBON',
      icon: 'fa fa-reply',
      id: 40,
      ischecked: true,
      score: 30,
      shortcutId: null,
      text: '我的抄送流程',
      url: 'wfl/activiti/process_history_carbon.html',
      symbol: '0',
      parentId: 39,
    },
    {
      expand: false,
      functionCode: 'WFL_OFFICE',
      icon: 'fa fa-user',
      id: 39,
      ischecked: true,
      score: 49,
      shortcutId: null,
      text: '工作流',
      url: null,
      symbol: '0',
    },
    {
      expand: false,
      functionCode: 'WFL_TEST',
      icon: 'fa fa-wrench',
      id: 30,
      ischecked: true,
      score: 10,
      shortcutId: null,
      text: '工作流测试',
      url: 'activiti/start_process_test.html',
      symbol: '0',
      parentId: 27,
    },
    {
      expand: false,
      functionCode: 'WFL_VACATION_TEST',
      icon: 'fa fa-wrench',
      id: 38,
      ischecked: true,
      score: 10,
      shortcutId: null,
      text: '工作流测试(请假申请)',
      url: 'activiti/demo/vacation_list.html',
      symbol: '0',
      parentId: 27,
    },
    {
      expand: false,
      functionCode: 'WFL_TASK',
      icon: 'fa fa-check-square-o',
      id: 28,
      ischecked: true,
      score: 20,
      shortcutId: null,
      text: '待办事项(管理员)',
      url: 'activiti/task_list.html',
      symbol: '0',
      parentId: 27,
    },
    {
      expand: false,
      functionCode: 'WFL_MODEL',
      icon: 'fa fa-object-group',
      id: 29,
      ischecked: true,
      score: 40,
      shortcutId: null,
      text: '流程设计',
      url: 'activiti/models.html',
      symbol: '0',
      parentId: 27,
    },
    {
      expand: false,
      functionCode: 'WFL_DEFINITION',
      icon: 'fa fa-share-alt',
      id: 31,
      ischecked: true,
      score: 50,
      shortcutId: null,
      text: '流程部署',
      url: 'activiti/process_definitions.html',
      symbol: '0',
      parentId: 27,
    },
    {
      expand: false,
      functionCode: 'WFL_LOG',
      icon: 'fa fa-check-square-o',
      id: 33,
      ischecked: true,
      score: 60,
      shortcutId: null,
      text: '报错日志',
      url: 'activiti/execption.html',
      symbol: '0',
      parentId: 27,
    },
    {
      expand: false,
      functionCode: 'WFL_MONITOR',
      icon: 'fa fa-check-square-o',
      id: 32,
      ischecked: true,
      score: 60,
      shortcutId: null,
      text: '流程监控',
      url: 'activiti/process_monitor.html',
      symbol: '0',
      parentId: 27,
    },
    {
      expand: false,
      functionCode: 'WFL_APV_STRATEGY',
      icon: 'fa fa-users',
      id: 35,
      ischecked: true,
      score: 10,
      shortcutId: null,
      text: '审批方式',
      url: 'activiti/approval/approve_strategy.html',
      symbol: '0',
      parentId: 34,
    },
    {
      expand: false,
      functionCode: 'WFL_APV_TYPE',
      icon: 'fa fa-user-plus',
      id: 36,
      ischecked: true,
      score: 20,
      shortcutId: null,
      text: '审批规则',
      url: 'activiti/approval/approve_candidate_rule.html',
      symbol: '0',
      parentId: 34,
    },
    {
      expand: false,
      functionCode: 'WFL_APV_RULE',
      icon: 'fa fa-gavel',
      id: 37,
      ischecked: true,
      score: 30,
      shortcutId: null,
      text: '审批权限',
      url: 'activiti/approval/business_rule_header.html',
      symbol: '0',
      parentId: 34,
    },
    {
      expand: false,
      functionCode: 'WFL_APPROVE',
      icon: 'fa fa-cog',
      id: 34,
      ischecked: true,
      score: 90,
      shortcutId: null,
      text: '审批配置',
      url: null,
      symbol: '0',
      parentId: 27,
    },
    {
      expand: false,
      functionCode: 'WFL',
      icon: 'fa fa-sitemap',
      id: 27,
      ischecked: true,
      score: 50,
      shortcutId: null,
      text: '流程管理',
      url: null,
      symbol: '0',
    },
    {
      expand: false,
      functionCode: 'IF_CONFIG',
      icon: 'fa fa-share-alt-square',
      id: 46,
      ischecked: true,
      score: 10,
      shortcutId: null,
      text: '接口定义',
      url: 'intergration/sys_interface_header.html',
      symbol: '0',
      parentId: 45,
    },
    {
      expand: false,
      functionCode: 'IF_INVOKE',
      icon: 'fa fa-bar-chart',
      id: 89,
      ischecked: true,
      score: 20,
      shortcutId: null,
      text: '调用记录',
      url: 'intergration/sys_interface_invoke.html',
      symbol: '0',
      parentId: 45,
    },
    {
      expand: false,
      functionCode: 'IF_CLIENT',
      icon: 'fa fa-laptop',
      id: 47,
      ischecked: true,
      score: 30,
      shortcutId: null,
      text: '客户端管理',
      url: 'sys/sys_oauth_client_details.html',
      symbol: '0',
      parentId: 45,
    },
    {
      expand: false,
      functionCode: 'IF_TOKEN',
      icon: 'fa fa-lock',
      id: 48,
      ischecked: true,
      score: 40,
      shortcutId: null,
      text: '授权管理',
      url: 'sys/sys_token_logs.html',
      symbol: '0',
      parentId: 45,
    },
    {
      expand: false,
      functionCode: 'IF',
      icon: 'fa fa-plug',
      id: 45,
      ischecked: true,
      score: 80,
      shortcutId: null,
      text: '接口管理',
      url: null,
      symbol: '0',
    },
    {
      expand: false,
      functionCode: 'API_SERVER',
      icon: 'fa fa-registered',
      id: 50,
      ischecked: true,
      score: 5,
      shortcutId: null,
      text: '服务注册',
      url: 'gateway/api_server.html',
      symbol: '0',
      parentId: 49,
    },
    {
      expand: false,
      functionCode: 'API_APPLICATION',
      icon: 'fa fa-th-large',
      id: 51,
      ischecked: true,
      score: 10,
      shortcutId: null,
      text: '应用管理',
      url: 'gateway/api_application.html',
      symbol: '0',
      parentId: 49,
    },
    {
      expand: false,
      functionCode: 'API_INVOKE',
      icon: 'fa fa-book',
      id: 52,
      ischecked: true,
      score: 15,
      shortcutId: null,
      text: '调用记录',
      url: 'gateway/api_invoke_record.html',
      symbol: '0',
      parentId: 49,
    },
    {
      expand: false,
      functionCode: 'API',
      icon: 'fa fa-server',
      id: 49,
      ischecked: true,
      score: 90,
      shortcutId: null,
      text: '服务管理',
      url: null,
      symbol: '0',
    },
    {
      expand: false,
      functionCode: 'TASK_DETAIL',
      icon: 'fa fa-life-saver',
      id: 54,
      ischecked: true,
      score: 10,
      shortcutId: null,
      text: '任务管理',
      url: 'task/task_details.html',
      symbol: '0',
      parentId: 53,
    },
    {
      expand: false,
      functionCode: 'TASK_EXECUTE',
      icon: 'fa fa-terminal',
      id: 55,
      ischecked: true,
      score: 15,
      shortcutId: null,
      text: '任务执行',
      url: 'task/task_execute.html',
      symbol: '0',
      parentId: 53,
    },
    {
      expand: false,
      functionCode: 'TASK_EXECUTION',
      icon: 'fa fa-archive',
      id: 56,
      ischecked: true,
      score: 20,
      shortcutId: null,
      text: '执行记录',
      url: 'task/task_execution.html',
      symbol: '0',
      parentId: 53,
    },
    {
      expand: false,
      functionCode: 'TASK_ADMIN_EXECUTION',
      icon: 'fa fa-archive',
      id: 57,
      ischecked: true,
      score: 25,
      shortcutId: null,
      text: '执行记录(管理员)',
      url: 'sys/task/execution/admin/task_execution.html',
      symbol: '0',
      parentId: 53,
    },
    {
      expand: false,
      functionCode: 'TASK',
      icon: 'fa fa-tasks',
      id: 53,
      ischecked: true,
      score: 95,
      shortcutId: null,
      text: '任务管理',
      url: null,
      symbol: '0',
    },
    {
      expand: false,
      functionCode: 'SYS_CONFIG',
      icon: 'fa fa-cog',
      id: 63,
      ischecked: true,
      score: 6,
      shortcutId: null,
      text: '系统配置',
      url: 'sys/sys_config.html',
      symbol: '0',
      parentId: 1,
    },
    {
      expand: false,
      functionCode: 'SYS_METRICS',
      icon: 'fa fa-heartbeat',
      id: 78,
      ischecked: true,
      score: 10,
      shortcutId: null,
      text: '系统指标',
      url: 'sys/sys_detail_metrics.html',
      symbol: '0',
      parentId: 1,
    },
    {
      expand: false,
      functionCode: 'ACCOUNT_USER',
      icon: 'fa fa-user-plus',
      id: 64,
      ischecked: true,
      score: 10,
      shortcutId: null,
      text: '用户管理',
      url: 'sys/sys_user.html',
      symbol: '0',
      parentId: 8,
    },
    {
      expand: false,
      functionCode: 'ACCOUNT_USER_REACT',
      icon: 'task_schedule',
      id: 9,
      ischecked: true,
      score: 10,
      shortcutId: null,
      text: '用户管理(react)',
      url: 'hap-core/account/user',
      symbol: '1',
      parentId: 8,
    },
    {
      expand: false,
      functionCode: 'ACCOUNT_ROLE_REACT',
      icon: 'test_execute',
      id: 10,
      ischecked: true,
      score: 20,
      shortcutId: null,
      text: '角色管理(react)',
      url: 'hap-core/account/role',
      symbol: '1',
      parentId: 8,
    },
    {
      expand: false,
      functionCode: 'ACCOUNT_ROLE',
      icon: 'fa fa-users',
      id: 65,
      ischecked: true,
      score: 20,
      shortcutId: null,
      text: '角色管理',
      url: 'sys/sys_role.html',
      symbol: '0',
      parentId: 8,
    },
    {
      expand: false,
      functionCode: 'ACCOUNT',
      icon: 'fa fa-user',
      id: 8,
      ischecked: true,
      score: 10,
      shortcutId: null,
      text: '账户管理',
      url: null,
      symbol: '0',
      parentId: 1,
    },
    {
      expand: false,
      functionCode: 'FORM',
      icon: 'fa fa-newspaper-o',
      id: 87,
      ischecked: true,
      score: 10,
      shortcutId: null,
      text: '表单管理',
      url: 'sys/ui-builder.html',
      symbol: '0',
      parentId: 1,
    },
    {
      expand: false,
      functionCode: 'HOTKEY',
      icon: 'fa fa-keyboard-o',
      id: 88,
      ischecked: true,
      score: 10,
      shortcutId: null,
      text: '热键配置',
      url: 'sys/sys_hotkey.html',
      symbol: '0',
      parentId: 1,
    },
    {
      expand: false,
      functionCode: 'FUNCTION_ADD',
      icon: 'fa fa-puzzle-piece',
      id: 66,
      ischecked: true,
      score: 10,
      shortcutId: null,
      text: '功能维护',
      url: 'sys/sys_function.html',
      symbol: '0',
      parentId: 3,
    },
    {
      expand: false,
      functionCode: 'RESOYRCE_REACT',
      icon: 'report_overview',
      id: 11,
      ischecked: null,
      score: 10,
      shortcutId: null,
      text: '资源管理(react)',
      url: 'hap-core/sys/resource',
      symbol: '1',
      parentId: 3,
    },
    {
      expand: false,
      functionCode: 'FUNCTION_REACT',
      icon: 'functions',
      id: 13,
      ischecked: true,
      score: 10,
      shortcutId: null,
      text: '功能维护(react)',
      url: 'hap-core/sys/function',
      symbol: '1',
      parentId: 3,
    },
    {
      expand: false,
      functionCode: 'SYS_RESOURCE',
      icon: 'fa fa-share-alt-square',
      id: 67,
      ischecked: true,
      score: 20,
      shortcutId: null,
      text: '资源管理',
      url: 'sys/sys_resource.html',
      symbol: '0',
      parentId: 3,
    },
    {
      expand: false,
      functionCode: 'FUNCTION_ASSIGN',
      icon: 'fa fa-list',
      id: 68,
      ischecked: true,
      score: 90,
      shortcutId: null,
      text: '功能分配',
      url: 'sys/sys_role_function.html',
      symbol: '0',
      parentId: 3,
    },
    {
      expand: false,
      functionCode: 'FUNCTION',
      icon: 'fa fa-plug',
      id: 3,
      ischecked: true,
      score: 10,
      shortcutId: null,
      text: '功能管理',
      url: null,
      symbol: '0',
      parentId: 1,
    },
    {
      expand: false,
      functionCode: 'SYS_DASHBOARD',
      icon: 'fa fa-dashboard',
      id: 77,
      ischecked: true,
      score: 15,
      shortcutId: null,
      text: '仪表盘配置',
      url: 'sys/sys_dashboard.html',
      symbol: '0',
      parentId: 1,
    },
    {
      expand: false,
      functionCode: 'PROMPT',
      icon: 'fa fa-edit',
      id: 58,
      ischecked: true,
      score: 20,
      shortcutId: null,
      text: '描述维护',
      url: 'sys/sys_prompt.html',
      symbol: '0',
      parentId: 1,
    },
    {
      expand: false,
      functionCode: 'PROMPT_REACT',
      icon: 'description',
      id: 14,
      ischecked: true,
      score: 20,
      shortcutId: null,
      text: '描述维护(react)',
      url: 'hap-core/sys/prompt',
      symbol: '1',
      parentId: 1,
    },
    {
      expand: false,
      functionCode: 'CODE',
      icon: 'fa fa-code',
      id: 59,
      ischecked: true,
      score: 30,
      shortcutId: null,
      text: '代码维护',
      url: 'sys/sys_code.html',
      symbol: '0',
      parentId: 1,
    },
    {
      expand: false,
      functionCode: 'CODE_REACT',
      icon: 'operation_help',
      id: 4,
      ischecked: true,
      score: 30,
      shortcutId: null,
      text: '代码维护(react)',
      url: 'hap-core/sys/code',
      symbol: '1',
      parentId: 1,
    },
    {
      expand: false,
      functionCode: 'LOV',
      icon: 'fa fa-search',
      id: 60,
      ischecked: true,
      score: 40,
      shortcutId: null,
      text: 'LOV定义',
      url: 'sys/sys_lov.html',
      symbol: '0',
      parentId: 1,
    },
    {
      expand: false,
      functionCode: 'SYS_CODE_RULE',
      icon: 'fa fa-cube',
      id: 83,
      ischecked: true,
      score: 45,
      shortcutId: null,
      text: '编码规则',
      url: 'code/rule/code_rules.html',
      symbol: '0',
      parentId: 1,
    },
    {
      expand: false,
      functionCode: 'LANGUAGE',
      icon: 'fa fa-flag',
      id: 61,
      ischecked: true,
      score: 50,
      shortcutId: null,
      text: '语言维护',
      url: 'sys/sys_language.html',
      symbol: '0',
      parentId: 1,
    },
    {
      expand: false,
      functionCode: 'LANGUAGE_REACT',
      icon: 'language',
      id: 15,
      ischecked: true,
      score: 50,
      shortcutId: null,
      text: '语言维护(react)',
      url: 'hap-core/sys/language',
      symbol: '1',
      parentId: 1,
    },
    {
      expand: false,
      functionCode: 'PROFILE',
      icon: 'fa fa-cogs',
      id: 62,
      ischecked: true,
      score: 50,
      shortcutId: null,
      text: '配置维护',
      url: 'sys/sys_profile.html',
      symbol: '0',
      parentId: 1,
    },
    {
      expand: false,
      functionCode: 'CODE_RULE_REACT',
      icon: 'report_overview',
      id: 90,
      ischecked: true,
      score: 60,
      shortcutId: null,
      text: '编码规则(react)',
      url: 'hap-core/sys/code_rules',
      symbol: '1',
      parentId: 1,
    },
    {
      expand: false,
      functionCode: 'EMAIL_ACCOUNT',
      icon: 'fa fa-envelope',
      id: 20,
      ischecked: true,
      score: 10,
      shortcutId: null,
      text: '邮件账户',
      url: 'mail/sys_message_email_config.html',
      symbol: '0',
      parentId: 19,
    },
    {
      expand: false,
      functionCode: 'EMAIL_TEMPLATE',
      icon: 'fa fa-envelope',
      id: 21,
      ischecked: true,
      score: 20,
      shortcutId: null,
      text: '邮件模板',
      url: 'mail/sys_message_template.html',
      symbol: '0',
      parentId: 19,
    },
    {
      expand: false,
      functionCode: 'EMAIL_TEST',
      icon: 'fa fa-envelope',
      id: 22,
      ischecked: true,
      score: 30,
      shortcutId: null,
      text: '邮件测试',
      url: 'mail/sys_message_test.html',
      symbol: '0',
      parentId: 19,
    },
    {
      expand: false,
      functionCode: 'EMAIL_STATUS',
      icon: 'fa fa-envelope',
      id: 23,
      ischecked: true,
      score: 40,
      shortcutId: null,
      text: '邮件状态查询',
      url: 'mail/message_status.html',
      symbol: '0',
      parentId: 19,
    },
    {
      expand: false,
      functionCode: 'EMAIL',
      icon: 'fa fa-envelope',
      id: 19,
      ischecked: true,
      score: 80,
      shortcutId: null,
      text: '邮件',
      url: null,
      symbol: '0',
      parentId: 1,
    },
    {
      expand: false,
      functionCode: 'FLEX_FIELD_MODEL',
      icon: 'fa fa-object-ungroup',
      id: 80,
      ischecked: true,
      score: 10,
      shortcutId: null,
      text: '弹性域模型',
      url: 'flexfield/flex_model.html',
      symbol: '0',
      parentId: 79,
    },
    {
      expand: false,
      functionCode: 'FLEX_FIELD_RULE_SET',
      icon: 'fa fa-object-ungroup',
      id: 81,
      ischecked: true,
      score: 20,
      shortcutId: null,
      text: '弹性域规则',
      url: 'flexfield/flex_rule_set.html',
      symbol: '0',
      parentId: 79,
    },
    {
      expand: false,
      functionCode: 'FLEX_FIELD_DEMO',
      icon: 'fa fa-object-ungroup',
      id: 82,
      ischecked: true,
      score: 30,
      shortcutId: null,
      text: '弹性域示例',
      url: 'demo/flexfield.html',
      symbol: '0',
      parentId: 79,
    },
    {
      expand: false,
      functionCode: 'FLEX_FIELD',
      icon: 'fa fa-object-group',
      id: 79,
      ischecked: true,
      score: 90,
      shortcutId: null,
      text: '弹性域',
      url: null,
      symbol: '0',
      parentId: 1,
    },
    {
      expand: false,
      functionCode: 'DATA_PERMISSION_RULE',
      icon: 'fa fa-user-times',
      id: 85,
      ischecked: true,
      score: 10,
      shortcutId: null,
      text: '屏蔽规则管理',
      url: 'permission/data_permission_rule.html',
      symbol: '0',
      parentId: 84,
    },
    {
      expand: false,
      functionCode: 'DATA_PERMISSION_TABLE',
      icon: 'fa fa-user-times',
      id: 86,
      ischecked: true,
      score: 20,
      shortcutId: null,
      text: '屏蔽权限设置',
      url: 'permission/data_permission_table.html',
      symbol: '0',
      parentId: 84,
    },
    {
      expand: false,
      functionCode: 'DATA_PERMISSION',
      icon: 'fa fa-user-times',
      id: 84,
      ischecked: false,
      score: 100,
      shortcutId: null,
      text: '数据屏蔽',
      url: null,
      symbol: '0',
      parentId: 1,
    },
    {
      expand: false,
      functionCode: 'SYSTEM',
      icon: 'fa fa-gears',
      id: 1,
      ischecked: true,
      score: 99,
      shortcutId: null,
      text: '系统管理',
      url: null,
      symbol: '0',
    },
  ],
  success: true,
  total: 10,
};

const lessTreeMock = {
  rows: [
    {
      expand: false,
      functionCode: 'EMPLOYEE_REACT',
      icon: 'record_test',
      id: 7,
      ischecked: true,
      score: 10,
      shortcutId: null,
      text: '员工管理(react)',
      url: 'hap-core/hr/employee',
      symbol: '1',
      parentId: 2,
    },
    {
      expand: false,
      functionCode: 'HR_UNIT',
      icon: 'fa fa-cube',
      id: 73,
      ischecked: true,
      score: 10,
      shortcutId: null,
      text: '组织管理',
      url: 'hr/org_unit.html',
      symbol: '0',
      parentId: 2,
    },
    {
      expand: false,
      functionCode: 'COMPANY_REACT',
      icon: 'mail_set',
      id: 12,
      ischecked: true,
      score: 10,
      shortcutId: null,
      text: '公司管理(react)',
      url: 'hap-core/hr/company',
      symbol: '1',
      parentId: 2,
    },
    {
      expand: false,
      functionCode: 'ORGUNIT_REACT',
      icon: 'authority',
      id: 5,
      ischecked: true,
      score: 10,
      shortcutId: null,
      text: '组织管理(react)',
      url: 'hap-core/hr/orgunit',
      symbol: '1',
      parentId: 2,
    },
    {
      expand: false,
      functionCode: 'POSITION_REACT',
      icon: 'agile_subtask',
      id: 6,
      ischecked: true,
      score: 10,
      shortcutId: null,
      text: '岗位管理(react)',
      url: 'hap-core/hr/position',
      symbol: '1',
      parentId: 2,
    },
    {
      expand: false,
      functionCode: 'HR_POSITION',
      icon: 'fa fa-user-secret',
      id: 75,
      ischecked: true,
      score: 20,
      shortcutId: null,
      text: '岗位管理',
      url: 'hr/position.html',
      symbol: '0',
      parentId: 2,
    },
    {
      expand: false,
      functionCode: 'HR_EMPLOYEE',
      icon: 'fa fa-user',
      id: 74,
      ischecked: true,
      score: 30,
      shortcutId: null,
      text: '员工管理',
      url: 'hr/employee.html',
      symbol: '0',
      parentId: 2,
    },
    {
      expand: true,
      functionCode: 'FND_COMPANY',
      icon: 'fa fa-cube',
      id: 76,
      ischecked: null,
      score: 40,
      shortcutId: null,
      text: '公司管理',
      url: 'fnd/company.html',
      symbol: '0',
      parentId: 2,
    },
    {
      expand: true,
      functionCode: 'HR',
      icon: 'fa fa-cubes',
      id: 2,
      ischecked: null,
      score: 10,
      shortcutId: null,
      text: '组织架构',
      url: null,
      symbol: '0',
    },
    {
      expand: true,
      functionCode: 'SYS_REPORT_LIST',
      icon: 'fa fa-user',
      id: 25,
      ischecked: true,
      score: 10,
      shortcutId: null,
      text: '报表定义',
      url: 'rpt/report.html',
      symbol: '0',
      parentId: 24,
    },
    {
      expand: true,
      functionCode: 'SYS_REPORT_DESIGN',
      icon: 'fa fa-user',
      id: 26,
      ischecked: true,
      score: 10,
      shortcutId: null,
      text: '报表设计',
      url: 'ureport/designer',
      symbol: '0',
      parentId: 24,
    },
  ],
  success: true,
  total: 10,
};
const asyncTreeMock = {
  rows: [
    {
      expand: false,
      functionCode: 'EMPLOYEE_REACT',
      icon: 'record_test',
      id: 7,
      ischecked: true,
      score: 10,
      shortcutId: null,
      text: '员工管理(react)',
      url: 'hap-core/hr/employee',
      symbol: '1',
    },
    {
      expand: false,
      functionCode: 'HR_UNIT',
      icon: 'fa fa-cube',
      id: 73,
      ischecked: true,
      score: 10,
      shortcutId: null,
      text: '组织管理',
      url: 'hr/org_unit.html',
      symbol: '0',
    },
    {
      expand: false,
      functionCode: 'COMPANY_REACT',
      icon: 'mail_set',
      id: 12,
      ischecked: true,
      score: 10,
      shortcutId: null,
      text: '公司管理(react)',
      url: 'hap-core/hr/company',
      symbol: '1',
    },
    {
      expand: false,
      functionCode: 'ORGUNIT_REACT',
      icon: 'authority',
      id: 5,
      ischecked: true,
      score: 10,
      shortcutId: null,
      text: '组织管理(react)',
      url: 'hap-core/hr/orgunit',
      symbol: '1',
    },
    {
      expand: false,
      functionCode: 'POSITION_REACT',
      icon: 'agile_subtask',
      id: 6,
      ischecked: true,
      score: 10,
      shortcutId: null,
      text: '岗位管理(react)',
      url: 'hap-core/hr/position',
      symbol: '1',
    },
    {
      expand: false,
      functionCode: 'HR_POSITION',
      icon: 'fa fa-user-secret',
      id: 75,
      ischecked: true,
      score: 20,
      shortcutId: null,
      text: '岗位管理',
      url: 'hr/position.html',
      symbol: '0',
    },
  ],
  success: true,
  total: 10,
};


const treeRule = /\/tree.mock/;
const lessTreeRule = /\/tree-less.mock/
const asyncRule = /\/tree-async.mock/
const treeData = Mock.mock(mockTemple);
const lessTreeData = Mock.mock(lessTreeMock)
export default function() {
  if (typeof window !== 'undefined') {
    Mock.mock(treeRule, mockTemple);
    Mock.mock(lessTreeRule,lessTreeMock);
    Mock.mock(asyncRule,asyncTreeMock)
  }
}

export const treeTempList = [{ rule: treeRule, data: treeData },{rule:lessTreeRule,data:lessTreeData},{rule:asyncRule,data:asyncTreeMock}];
