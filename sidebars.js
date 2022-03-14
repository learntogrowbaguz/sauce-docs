
module.exports = {
    apif: [
        {
            type: 'category',
            label: 'API Testing On-Prem (Legacy)',
            collapsed: true,
            items: [
                {
                    type: 'category',
                    label: 'Quickstart (Legacy)',
                    collapsed: true,
                    items: [
                        'api-testing/on-prem/quick-start',
                        'api-testing/on-prem/quick-start/composer',
                        'api-testing/on-prem/quick-start/build-from-spec',
                        'api-testing/on-prem/quick-start/test-reports',
                        'api-testing/on-prem/quick-start/schedule-a-test',
                        'api-testing/on-prem/quick-start/dashboard',
                        'api-testing/on-prem/quick-start/integrate-with-your-cicd',
                        'api-testing/on-prem/quick-start/introduction-to-integration-testing',
                        'api-testing/on-prem/quick-start/adding-a-user',
                        'api-testing/on-prem/quick-start/flexible-variables-for-flexible-environments',
                        'api-testing/on-prem/quick-start/environments-vault-and-overrides-magic',
                        'api-testing/on-prem/quick-start/setup-connectors',
                        'api-testing/on-prem/quick-start/the-vault',
                        'api-testing/on-prem/quick-start/importing-postman-collections',
                        'api-testing/on-prem/quick-start/load-testing',
                        'api-testing/on-prem/quick-start/mocking-services',
                        'api-testing/on-prem/quick-start/easy-monitoring',
                        'api-testing/on-prem/quick-start/forge',
                    ],
                },
                {
                    type: 'category',
                    label: 'APIs and Webhooks (Legacy)',
                    collapsed: true,
                    items: [
                        'api-testing/on-prem/api/v3',
                        'api-testing/on-prem/api/using-the-api',
                    ],
                },
                {
                    type: 'category',
                    label: 'Assertion Components (Legacy)',
                    collapsed: true,
                    items: [
                        'api-testing/on-prem/assertion-components/assert-compares',
                        'api-testing/on-prem/assertion-components/assert-contains',
                        'api-testing/on-prem/assertion-components/assert-equals',
                        'api-testing/on-prem/assertion-components/assert-exists',
                        'api-testing/on-prem/assertion-components/assert-greater',
                        'api-testing/on-prem/assertion-components/assert-in',
                        'api-testing/on-prem/assertion-components/assert-is',
                        'api-testing/on-prem/assertion-components/assert-less',
                        'api-testing/on-prem/assertion-components/assert-matches',
                        'api-testing/on-prem/assertion-components/assert-valid-json-schema',
                    ],
                },
                {
                    type: 'category',
                    label: 'Bloodhound (Legacy)',
                    collapsed: true,
                    items: [
                        'api-testing/on-prem/bloodhound',
                        'api-testing/on-prem/bloodhound/basic-configuration',
                        'api-testing/on-prem/bloodhound/flows',
                        'api-testing/on-prem/bloodhound/base-actors',
                        'api-testing/on-prem/bloodhound/load-balancing',
                        'api-testing/on-prem/bloodhound/fine-tuning',
                        'api-testing/on-prem/bloodhound/advanced-actors',
                        {
                            type: 'category',
                            label: 'Module Actors',
                            collapsed: true,
                            items: [
                                'api-testing/on-prem/bloodhound/module-actors',
                                'api-testing/on-prem/bloodhound/module-actors/jdbc',
                                'api-testing/on-prem/bloodhound/module-actors/mongodb',
                                'api-testing/on-prem/bloodhound/module-actors/rabbitmq',
                                'api-testing/on-prem/bloodhound/module-actors/fortress-forwarder',
                            ],
                        },
                        'api-testing/on-prem/bloodhound/expressions',
                        'api-testing/on-prem/bloodhound/forward-calls-to-apif-logger',
                        'api-testing/on-prem/bloodhound/using-databases',
                    ],
                },
                {
                    type: 'category',
                    label: 'CI/CD (Legacy)',
                    collapsed: true,
                    items: [
                        'api-testing/on-prem/ci/apif-auto',
                        'api-testing/on-prem/ci/azure-devops',
                        'api-testing/on-prem/ci/connecting-with-bamboo',
                        'api-testing/on-prem/ci/bitbucket',
                        'api-testing/on-prem/ci/gitlab',
                        {
                            type: 'category',
                            label: 'Jenkins',
                            collapsed: true,
                            items: [
                                'api-testing/on-prem/ci/jenkins/using-the-api',
                                'api-testing/on-prem/ci/jenkins/apif-auto',
                                'api-testing/on-prem/ci/jenkins/apif-auto-and-github',
                                'api-testing/on-prem/ci/jenkins/zephyr-enterprise-integration',
                            ],
                        },
                        'api-testing/on-prem/ci/micro-focus-alm-integration',
                    ],
                },
                {
                    type: 'category',
                    label: 'How To Guides (Legacy)',
                    collapsed: true,
                    items: [
                        'api-testing/on-prem/how-to/assertions-for-metrics-performance',
                        'api-testing/on-prem/how-to/3-leg-oauth',
                        'api-testing/on-prem/how-to/integration-testing',
                        'api-testing/on-prem/how-to/copy-a-test',
                        'api-testing/on-prem/how-to/authorization-simple-oauth-etc',
                        'api-testing/on-prem/how-to/different-ways-to-compose-a-request-body',
                        'api-testing/on-prem/how-to/disable-ssl-validation',
                        'api-testing/on-prem/how-to/dynamic-dates',
                        'api-testing/on-prem/how-to/tweaking-stateful-email-notifications',
                        'api-testing/on-prem/how-to/executing-from-cucumber',
                        'api-testing/on-prem/how-to/following-redirects',
                        'api-testing/on-prem/how-to/footprint',
                        'api-testing/on-prem/how-to/generate-a-status-page',
                        'api-testing/on-prem/how-to/generating-fake-test-data',
                        'api-testing/on-prem/how-to/github-for-datasets',
                        'api-testing/on-prem/how-to/create-a-dynamic-header',
                        'api-testing/on-prem/how-to/import-export-tests',
                        'api-testing/on-prem/how-to/kv',
                        'api-testing/on-prem/how-to/keystores-for-downloader',
                        'api-testing/on-prem/how-to/load-agent-deployment',
                        'api-testing/on-prem/how-to/setup-notifications-performance-alerts',
                        'api-testing/on-prem/how-to/testing-graphql',
                        'api-testing/on-prem/how-to/update-input',
                        'api-testing/on-prem/how-to/using-long-lasting-tokens',
                        'api-testing/on-prem/how-to/version-control',
                        'api-testing/on-prem/how-to/writing-tests-in-code',
                    ],
                },
                {
                    type: 'category',
                    label: 'I/O Components (Legacy)',
                    collapsed: true,
                    items: [
                        'api-testing/on-prem/io-components',
                        'api-testing/on-prem/io-components/jdbc',
                        'api-testing/on-prem/io-components/multipart-upload',
                        'api-testing/on-prem/how-to/update-input',
                    ],
                },
                {
                    type: 'category',
                    label: 'Integrations (Legacy)',
                    collapsed: true,
                    items: [
                        'api-testing/on-prem/integrations/add-new-connector',
                        'api-testing/on-prem/integrations/alerts-thresholds-using-json-connector',
                        'api-testing/on-prem/ci/connecting-with-bamboo',
                        {
                            type: 'category',
                            label: 'Connectors',
                            collapsed: true,
                            items: [
                                'api-testing/on-prem/integrations/connectors/bigpanda-io',
                                'api-testing/on-prem/integrations/connectors/datadog',
                                'api-testing/on-prem/integrations/connectors/elastic-kibana',
                                'api-testing/on-prem/integrations/connectors/jira',
                                'api-testing/on-prem/integrations/connectors/pagerduty',
                                'api-testing/on-prem/integrations/connectors/statuspage',
                                'api-testing/on-prem/integrations/connectors/twilio',
                                'api-testing/on-prem/integrations/connectors/xmatters',
                                'api-testing/on-prem/integrations/connectors/splunk',
                            ],
                        },
                        'api-testing/on-prem/integrations/helper-databases-jdbc',
                        'api-testing/on-prem/integrations/jenkins',
                        'api-testing/on-prem/integrations/single-sign-on-with-saml-2-0-beta',
                    ],
                },
                {
                    type: 'category',
                    label: 'Learn More (Legacy)',
                    collapsed: true,
                    items: [
                        'api-testing/on-prem/learn-more/downloader-101',
                        'api-testing/on-prem/learn-more/improving-your-metrics',
                        'api-testing/on-prem/learn-more/input-set-and-global-variables',
                        'api-testing/on-prem/learn-more/planning-your-test',
                        'api-testing/on-prem/learn-more/the-variables-system-in-api-fortress',
                        'api-testing/on-prem/learn-more/working-with-the-response-object',
                        'api-testing/on-prem/learn-more/the-working-copy-published-tests',

<<<<<<< HEAD
                    ],
                },
                {
                    type: 'category',
                    label: 'Logical Components (Legacy)',
                    collapsed: true,
                    items: [
                        'api-testing/on-prem/logical-components/each',
                        'api-testing/on-prem/logical-components/flow',
                        'api-testing/on-prem/logical-components/if',
                        'api-testing/on-prem/logical-components/tag',
                        'api-testing/on-prem/logical-components/while',
                    ],
                },
                {
                    type: 'category',
                    label: 'Mocking / Service Virtualization (Legacy)',
                    collapsed: true,
                    items: [
                        'api-testing/on-prem/mocking/expressions-in-mocked-apis',
                        'api-testing/on-prem/mocking/mock-recording-with-kong',
                    ],
                },
                {
                    type: 'category',
                    label: 'Monitoring (Legacy)',
                    collapsed: true,
                    items: [
                        'api-testing/on-prem/how-to/generate-a-status-page',
                        'api-testing/on-prem/how-to/setup-notifications-performance-alerts',
                    ],
                },
                {
                    type: 'category',
                    label: 'Postman (Legacy)',
                    collapsed: true,
                    items: [
                        'api-testing/on-prem/postman/build-from-collections',
                    ],
                },
                {
                    type: 'category',
                    label: 'Product Information (Legacy)',
                    collapsed: true,
                    items: [
                        'api-testing/on-prem/product-information/api-tests-vs-schema-validation',
                        'api-testing/on-prem/product-information/cloud-vs-on-premises-local',
                    ],
                },
                {
                    type: 'category',
                    label: 'Reference (Legacy)',
                    collapsed: true,
                    items: [
                        'api-testing/on-prem/assertion-components/assert-compares',
                        'api-testing/on-prem/assertion-components/assert-contains',
                        'api-testing/on-prem/assertion-components/assert-equals',
                        'api-testing/on-prem/assertion-components/assert-exists',
                        'api-testing/on-prem/assertion-components/assert-greater',
                        'api-testing/on-prem/assertion-components/assert-in',
                        'api-testing/on-prem/assertion-components/assert-is',
                        'api-testing/on-prem/assertion-components/assert-less',
                        'api-testing/on-prem/assertion-components/assert-matches',
                        'api-testing/on-prem/reference/comment',
                        'api-testing/on-prem/reference/company-settings',
                        'api-testing/on-prem/reference/composer-snippets',
                        'api-testing/on-prem/reference/connecting-to-testrail',
                        'api-testing/on-prem/reference/execution-context-in-api-fortress',
                        'api-testing/on-prem/reference/expression',
                        'api-testing/on-prem/reference/expression-language-extensions',
                        'api-testing/on-prem/logical-components/flow',
                        'api-testing/on-prem/reference/generating-a-jwt',
                        'api-testing/on-prem/reference/github',
                        'api-testing/on-prem/logical-components/if',
                        'api-testing/on-prem/bloodhound/module-actors/jdbc',
                        'api-testing/on-prem/how-to/kv',
                        'api-testing/on-prem/reference/read-file',
                        'api-testing/on-prem/logical-components/tag',
                        'api-testing/on-prem/logical-components/while',
                    ],
                },
                {
                    type: 'category',
                    label: 'Security Testing (Legacy)',
                    collapsed: true,
                    items: [
                        'api-testing/on-prem/security-testing/example-security-tests',
                    ],
                },
                {
                    type: 'category',
                    label: 'Self Hosted (Legacy)',
                    collapsed: true,
                    items: [{
                        type: 'category',
                        label: 'The Self Hosted Platform',
                        collapsed: true,
                        items: [
                            'api-testing/on-prem/self-hosted/on-prem-platform',
                            'api-testing/on-prem/self-hosted/on-premises-requirements',
                            'api-testing/on-prem/self-hosted/updating-an-on-premises-instance',
                            'api-testing/on-prem/self-hosted/on-premises-backing-up-your-data',
                        ],
                    },
                        {
                            type: 'category',
                            label: 'Other Platforms',
                            collapsed: true,
                            items: [
                                'api-testing/on-prem/self-hosted/deployment-docker',
                                'api-testing/on-prem/self-hosted/deployment-kubernetes',
                                'api-testing/on-prem/self-hosted/red-hat-openshift',
                            ],
                        },
                        'api-testing/on-prem/self-hosted/best-practices-for-disaster-recovery',
                        'api-testing/on-prem/self-hosted/certificate-based-mutual-ssl-tls-authentication',
                        'api-testing/on-prem/self-hosted/deployment-configure-the-dns-for-the-mocking-service',
                        'api-testing/on-prem/learn-more/downloader-101',
                        'api-testing/on-prem/self-hosted/enabling-api-fortress-to-read-local-files',
                        'api-testing/on-prem/how-to/load-agent-deployment',
                        'api-testing/on-prem/self-hosted/local-downloader-setup',
                        'api-testing/on-prem/self-hosted/multiple-client-cert-downloader',
                        'api-testing/on-prem/self-hosted/proxy-settings-in-downloader',
                        'api-testing/on-prem/self-hosted/updating-the-api-fortress-license-key',
                        'api-testing/on-prem/self-hosted/using-rds-and-documentdb',
                    ],
                },
            ],
        },
    ],
    aiq: [
        {
            type: 'category',
            label: 'Low Code',
            collapsed: true,
            items: [
                'dev/low-code',
                'dev/low-code/dashboard',
                {
                    type: 'category',
                    label: 'Plan',
                    collapsed: true,
                    items: [
                        'dev/low-code/plan/plan-step',
                        {
                            type: 'category',
                            label: 'Projects',
                            collapsed: true,
                            items: [
                                'dev/low-code/plan/projects/projects',
                                'dev/low-code/plan/projects/project-details-page',
                            ]
                        },
                        'dev/low-code/plan/test-suites',
                        'dev/low-code/plan/test-cases',
                    ]
                },
                {
                    type: 'category',
                    label: 'Execute',
                    collapsed: true,
                    items: [
                        'dev/low-code/execute/execute-step',
                        'dev/low-code/execute/execution-history-page',
                        'dev/low-code/execute/reports-page',
                        'dev/low-code/execute/schedules-page',
                    ]
                },
                'dev/low-code/analyze-step',
                'dev/low-code/profile',
                'dev/low-code/nlp-reference',
                'dev/low-code/variables',
                'dev/low-code/troubleshooting',
            ],
        },
    ],
    backtrace: [
        {
            type: 'category',
            label: 'Error Reporting',
            collapsed: true,
            items: [
                'error-reporting/getting-started',
            ],
        },
        {
            type: 'category',
            label: 'Platform Integrations',
            collapsed: true,
            items: [
=======
                 ],
             },
             {
                 type: 'category',
                 label: 'Logical Components (Legacy)',
                 collapsed: true,
                 items: [
                     'api-testing/on-prem/logical-components/each',
                     'api-testing/on-prem/logical-components/flow',
                     'api-testing/on-prem/logical-components/if',
                     'api-testing/on-prem/logical-components/tag',
                     'api-testing/on-prem/logical-components/while',
                 ],
             },
             {
                 type: 'category',
                 label: 'Mocking / Service Virtualization (Legacy)',
                 collapsed: true,
                 items: [
                     'api-testing/on-prem/mocking/expressions-in-mocked-apis',
                     'api-testing/on-prem/mocking/mock-recording-with-kong',
                 ],
             },
             {
                 type: 'category',
                 label: 'Monitoring (Legacy)',
                 collapsed: true,
                 items: [
                     'api-testing/on-prem/how-to/generate-a-status-page',
                     'api-testing/on-prem/how-to/setup-notifications-performance-alerts',
                 ],
             },
             {
                 type: 'category',
                 label: 'Postman (Legacy)',
                 collapsed: true,
                 items: [
                     'api-testing/on-prem/postman/build-from-collections',
                 ],
             },
             {
                 type: 'category',
                 label: 'Product Information (Legacy)',
                 collapsed: true,
                 items: [
                     'api-testing/on-prem/product-information/api-tests-vs-schema-validation',
                     'api-testing/on-prem/product-information/cloud-vs-on-premises-local',
                 ],
             },
             {
                 type: 'category',
                 label: 'Reference (Legacy)',
                 collapsed: true,
                 items: [
                     'api-testing/on-prem/assertion-components/assert-compares',
                     'api-testing/on-prem/assertion-components/assert-contains',
                     'api-testing/on-prem/assertion-components/assert-equals',
                     'api-testing/on-prem/assertion-components/assert-exists',
                     'api-testing/on-prem/assertion-components/assert-greater',
                     'api-testing/on-prem/assertion-components/assert-in',
                     'api-testing/on-prem/assertion-components/assert-is',
                     'api-testing/on-prem/assertion-components/assert-less',
                     'api-testing/on-prem/assertion-components/assert-matches',
                     'api-testing/on-prem/reference/comment',
                     'api-testing/on-prem/reference/company-settings',
                     'api-testing/on-prem/reference/composer-snippets',
                     'api-testing/on-prem/reference/connecting-to-testrail',
                     'api-testing/on-prem/reference/execution-context-in-api-fortress',
                     'api-testing/on-prem/reference/expression',
                     'api-testing/on-prem/reference/expression-language-extensions',
                     'api-testing/on-prem/logical-components/flow',
                     'api-testing/on-prem/reference/generating-a-jwt',
                     'api-testing/on-prem/reference/github',
                     'api-testing/on-prem/logical-components/if',
                     'api-testing/on-prem/bloodhound/module-actors/jdbc',
                     'api-testing/on-prem/how-to/kv',
                     'api-testing/on-prem/reference/read-file',
                     'api-testing/on-prem/logical-components/tag',
                     'api-testing/on-prem/logical-components/while',
                 ],
             },
             {
                 type: 'category',
                 label: 'Security Testing (Legacy)',
                 collapsed: true,
                 items: [
                     'api-testing/on-prem/security-testing/example-security-tests',
                 ],
             },
             {
                 type: 'category',
                 label: 'Self Hosted (Legacy)',
                 collapsed: true,
                 items: [{
                     type: 'category',
                     label: 'The Self Hosted Platform',
                     collapsed: true,
                     items: [
                         'api-testing/on-prem/self-hosted/on-prem-platform',
                         'api-testing/on-prem/self-hosted/on-premises-requirements',
                         'api-testing/on-prem/self-hosted/updating-an-on-premises-instance',
                         'api-testing/on-prem/self-hosted/on-premises-backing-up-your-data',
                     ],
                 },
                     {
                         type: 'category',
                         label: 'Other Platforms',
                         collapsed: true,
                         items: [
                             'api-testing/on-prem/self-hosted/deployment-docker',
                             'api-testing/on-prem/self-hosted/deployment-kubernetes',
                             'api-testing/on-prem/self-hosted/red-hat-openshift',
                         ],
                     },
                     'api-testing/on-prem/self-hosted/best-practices-for-disaster-recovery',
                     'api-testing/on-prem/self-hosted/certificate-based-mutual-ssl-tls-authentication',
                     'api-testing/on-prem/self-hosted/deployment-configure-the-dns-for-the-mocking-service',
                     'api-testing/on-prem/learn-more/downloader-101',
                     'api-testing/on-prem/self-hosted/enabling-api-fortress-to-read-local-files',
                     'api-testing/on-prem/how-to/load-agent-deployment',
                     'api-testing/on-prem/self-hosted/local-downloader-setup',
                     'api-testing/on-prem/self-hosted/multiple-client-cert-downloader',
                     'api-testing/on-prem/self-hosted/proxy-settings-in-downloader',
                     'api-testing/on-prem/self-hosted/updating-the-api-fortress-license-key',
                     'api-testing/on-prem/self-hosted/using-rds-and-documentdb',
                 ],
             },
         ],
     },
 ],
 aiq: [
 {
   type: 'category',
   label: 'Low Code',
   collapsed: true,
   items: [
       'dev/low-code',
       'dev/low-code/dashboard',
       {
           type: 'category',
           label: 'Plan',
           collapsed: true,
           items: [
               'dev/low-code/plan/plan-step',
               {
                   type: 'category',
                   label: 'Projects',
                   collapsed: true,
                   items: [
                       'dev/low-code/plan/projects/projects',
                       'dev/low-code/plan/projects/project-details-page',
                     ]
               },
               'dev/low-code/plan/test-suites',
               'dev/low-code/plan/test-cases',
             ]
       },
       {
           type: 'category',
           label: 'Execute',
           collapsed: true,
           items: [
               'dev/low-code/execute/execute-step',
               'dev/low-code/execute/execution-history-page',
               'dev/low-code/execute/reports-page',
               'dev/low-code/execute/schedules-page',
             ]
       },
       'dev/low-code/analyze-step',
       'dev/low-code/profile',
       'dev/low-code/nlp-reference',
       'dev/low-code/variables',
       'dev/low-code/troubleshooting',
        ],
     },
 ],
 dev: [
     'dev',
     {
         type: 'category',
         label: 'API Reference',
         collapsed: true,
         items: [
             'dev/api',
             'dev/api/accounts',
             'dev/api/api-testing',
             'dev/api/jobs',
             'dev/api/builds',
             'dev/api/connect',
             'dev/api/insights',
             'dev/api/performance',
             'dev/api/platform',
             'dev/api/rdc',
             'dev/api/storage',
         ],
     },
     {
         type: 'category',
         label: 'CLI Reference',
         collapsed: true,
         items: [
             'dev/cli',
             'dev/cli/sauce-connect-proxy',
             {
                 type: 'category',
                 label: 'saucectl CLI',
                 collapsed: true,
                 items: [
                    'dev/cli/saucectl',
                    {
                      type: 'category',
                      label: 'Command Ref',
                      collapsed: true,
                      items: [
                        'dev/cli/saucectl/init',
                        'dev/cli/saucectl/configure',
                        'dev/cli/saucectl/run',
                        'dev/cli/saucectl/completion',
                      ]},
                    'dev/cli/saucectl/usage/use-cases',
                    {
                      type: 'category',
                      label: 'CI Integrations',
                      collapsed: true,
                      items: [
                        'dev/cli/saucectl/usage/ci/circleci',
                        'dev/cli/saucectl/usage/ci/github-actions',
                        'dev/cli/saucectl/usage/ci/gitlab',
                        'dev/cli/saucectl/usage/ci/jenkins',
                      ]},
                      {
                        type: 'category',
                        label: 'IDE Integrations',
                        collapsed: true,
                        items: [
                          'dev/cli/saucectl/usage/ide/intellij',
                          'dev/cli/saucectl/usage/ide/vscode',
                        ]},
                 ],
             },
             {
                 type: 'category',
                 label: 'Virtual USB CLI',
                 collapsed: true,
                 items: [
                     'dev/cli/virtual-usb',
                     'dev/cli/virtual-usb/start-server',
                     'dev/cli/virtual-usb/start-session',
                     'dev/cli/virtual-usb/connect-session',
                     'dev/cli/virtual-usb/disconnect-session',
                     'dev/cli/virtual-usb/delete-session',
                     'dev/cli/virtual-usb/find-sessionid',
                 ],
             },
         ],
     },
 ],
 docs: {
     "Home": [
         'overview',
         {
             type: 'category',
             label: 'Sauce Labs Basics',
             collapsed: true,
             items: [
                 'sauce-basics',
                 'basics/quickstarts',
                 'basics/platform-configurator',
                 'basics/environment-variables',
>>>>>>> 6e9e1ea9d7d3440483ff517e518a4291df1a604c

                {
                    type: 'category',
                    label: 'Unity',
                    collapsed: true,
                    items: [
                        'error-reporting/platform-integrations/unity/setup',
                        'error-reporting/platform-integrations/unity/configuration',
                        'error-reporting/platform-integrations/unity/attributes',
                    ],
                },
                {
                    type: 'category',
                    label: 'Unreal Engine',
                    collapsed: true,
                    items: [
                        'error-reporting/platform-integrations/unreal/setup',
                        'error-reporting/platform-integrations/unreal/attributes',
                    ],
                },
            ],
        },
    ],
    dev: [
        'dev',
        {
            type: 'category',
            label: 'API Reference',
            collapsed: true,
            items: [
                'dev/api',
                'dev/api/accounts',
                'dev/api/jobs',
                'dev/api/builds',
                'dev/api/connect',
                'dev/api/insights',
                'dev/api/performance',
                'dev/api/platform',
                'dev/api/rdc',
                'dev/api/storage',
            ],
        },
        {
            type: 'category',
            label: 'CLI Reference',
            collapsed: true,
            items: [
                'dev/cli',
                'dev/cli/sauce-connect-proxy',
                {
                    type: 'link',
                    label: 'saucectl CLI', // The label that should be displayed (string).
                    href: '/testrunner-toolkit/saucectl' // The target URL (string).
                },
                {
                    type: 'category',
                    label: 'Virtual USB CLI',
                    collapsed: true,
                    items: [
                        'dev/cli/virtual-usb',
                        'dev/cli/virtual-usb/start-server',
                        'dev/cli/virtual-usb/start-session',
                        'dev/cli/virtual-usb/connect-session',
                        'dev/cli/virtual-usb/disconnect-session',
                        'dev/cli/virtual-usb/delete-session',
                        'dev/cli/virtual-usb/find-sessionid',
                    ],
                },
            ],
        },
    ],
    docs: {
        "Home": [
            'overview',
            {
                type: 'category',
                label: 'Sauce Labs Basics',
                collapsed: true,
                items: [
                    'sauce-basics',
                    'basics/quickstarts',
                    'basics/platform-configurator',
                    'basics/environment-variables',

                    {
                        type: 'category',
                        label: 'Account and Team Management',
                        collapsed: true,
                        items: [
                            'basics/acct-team-mgmt-hub',
                            'basics/acct-team-mgmt/org-settings',

                            {
                                type: 'category',
                                label: 'Managing Users and Accounts',
                                collapsed: true,
                                items: [
                                    'basics/acct-team-mgmt/concurrency-limits',
                                    'basics/acct-team-mgmt/adding-deactivating-users',
                                    'basics/acct-team-mgmt/managing-user-info',
                                    'basics/acct-team-mgmt/viewing-exporting-usage-data',
                                ],
                            },
                            {
                                type: 'category',
                                label: 'Managing Teams',
                                collapsed: true,
                                items: [
                                    'basics/acct-team-mgmt/adding-deleting-teams',
                                    'basics/acct-team-mgmt/assigning-removing-users-teams',
                                    'basics/acct-team-mgmt/private-device-mgmt',
                                    'basics/acct-team-mgmt/sauce-connect-proxy-tunnels',
                                ],
                            },
                            {
                                type: 'category',
                                label: 'Billing and Subscriptions',
                                collapsed: true,
                                items: [
                                    'basics/acct-team-mgmt/managing-subscription',
                                    'basics/acct-team-mgmt/updating-billing',
                                    'basics/acct-team-mgmt/plan-details',
                                ],
                            },
                        ],
                    },

                    {
                        type: 'category',
                        label: 'Single Sign-On',
                        collapsed: true,
                        items: [
                            'basics/sso-hub',
                            'basics/sso/setting-up-single-sign-on',
                            'basics/sso/config-adfs',
                            'basics/sso/config-okta',

                        ],
                    },
                    {
                        type: 'category',
                        label: 'Test Configuration and Annotation',
                        collapsed: true,
                        items: [
                            'basics/test-config-annotation/test-config',
                            'basics/test-config-annotation/test-annotation',

                        ],
                    },
                    {
                        type: 'category',
                        label: 'Data Center Endpoints',
                        collapsed: true,
                        items: [
                            'basics/data-center-endpoints',
                            'basics/data-center-endpoints/aust-early-access',

<<<<<<< HEAD
                        ],
                    },
                    {
                        type: 'category',
                        label: 'Integrations',
                        collapsed: true,
                        items: [
                            'basics/integrations/deque',
                            'basics/integrations/jira',
                            'basics/integrations/slack',
                            'basics/integrations/webhooks',
                            'basics/integrations/sumo',
                        ],
                    },
                ],
            },
        ],
        "Sauce Trusted Connection": [
            'secure-connections',
            {
                type: 'category',
                label: 'Sauce Connect Proxy',
                collapsed: true,
                items: [
                    'secure-connections/sauce-connect',
                    'secure-connections/sauce-connect/quickstart',
                    'secure-connections/sauce-connect/system-requirements',
                    'secure-connections/sauce-connect/installation',
=======
                     ],
                 },
                 {
                     type: 'category',
                     label: 'Integrations',
                     collapsed: true,
                     items: [
                         'basics/integrations/deque',
                         'basics/integrations/jira',
                         'basics/integrations/slack',
                         'basics/integrations/webhooks',
                         'basics/integrations/sumo',
                     ],
                 },
             ],
         },
     ],
     "Sauce Trusted Connection": [
         'secure-connections',
         {
             type: 'category',
             label: 'Sauce Connect Proxy',
             collapsed: true,
             items: [
                 'secure-connections/sauce-connect',
                 'secure-connections/sauce-connect/installation',
                 'secure-connections/sauce-connect/quickstart',
                 'secure-connections/sauce-connect/system-requirements',
>>>>>>> 6e9e1ea9d7d3440483ff517e518a4291df1a604c

                    {
                        type: 'category',
                        label: 'Setup and Configuration',
                        collapsed: true,
                        items: [
                            'secure-connections/sauce-connect/setup-configuration/basic-setup',
                            'secure-connections/sauce-connect/setup-configuration/yaml-config',
                            'secure-connections/sauce-connect/setup-configuration/environment-variables',
                            'secure-connections/sauce-connect/setup-configuration/high-availability',
                            'secure-connections/sauce-connect/setup-configuration/additional-proxies',
                            'secure-connections/sauce-connect/setup-configuration/specialized-environments',
                            'secure-connections/sauce-connect/setup-configuration/ci-cd-integration',
                        ]
                    },
                    'secure-connections/sauce-connect/proxy-tunnels',
                    'secure-connections/sauce-connect/security-authentication',
                    {
                        type: 'category',
                        label: 'Advanced',
                        collapsed: true,
                        items: [
                            'secure-connections/sauce-connect/advanced/architecture',
                            'secure-connections/sauce-connect/advanced/kgp',
                        ]
                    },
                    'secure-connections/sauce-connect/troubleshooting',
                    'secure-connections/sauce-connect/faq',
                    'secure-connections/sauce-connect/changelog',
                ],
            },
            'secure-connections/ipsec-vpn',
        ],


        "Mobile Apps": [
            'mobile-apps',
            'mobile-apps/supported-devices',
            'mobile-apps/app-storage',
            {
                type: 'category',
                label: 'Features',
                collapsed: true,
                items: [
                    'mobile-apps/features/virtual-usb',
                    'mobile-apps/features/biometric-authentication',
                    'mobile-apps/features/camera-image-injection',
                    'mobile-apps/features/gestures',

                ],
            },
            {
                type: 'category',
                label: 'Live Testing',
                collapsed: true,
                items: [
                    'mobile-apps/live-testing/live-mobile-app-testing',
                ],
            },

<<<<<<< HEAD
            {
                type: 'category',
                label: 'Automated Testing',
                collapsed: true,
                items: [
                    'mobile-apps/automated-testing',
                    {
                        type: 'category',
                        label: 'Appium',
                        collapsed: true,
                        items: [
                            'mobile-apps/automated-testing/appium',
                            'mobile-apps/automated-testing/appium/quickstart',
                            'mobile-apps/automated-testing/appium/real-devices',
                            'mobile-apps/automated-testing/appium/virtual-devices',
                        ],
                    },
                    {
                        type: 'category',
                        label: 'Espresso and XCUITest',
                        collapsed: true,
                        items: [
                            'mobile-apps/automated-testing/espresso-xcuitest',
                            'testrunner-toolkit/configuration/espresso',
                            'testrunner-toolkit/configuration/xcuitest',
                        ],
                    },
                    'mobile-apps/automated-testing/ipa-files',
                ],
            },
            'mobile-apps/ms-app-center',
            'mobile-apps/faq',
        ],
        "Web Apps": [
            'web-apps',
            {
                type: 'category',
                label: 'Live Testing',
                collapsed: true,
                items: [
                    'web-apps/live-testing/live-cross-browser-testing',
                ],
            },
            {
                type: 'category',
                label: 'Automated Testing',
                collapsed: true,
                items: [{
                    type: 'category',
                    label: 'Selenium',
                    collapsed: true,
                    items: [
                        'web-apps/automated-testing/selenium',
                        'web-apps/automated-testing/selenium/selenium4',
                        'web-apps/automated-testing/selenium/pre-run-executables',
                        'web-apps/automated-testing/selenium/sample-scripts',
                    ]
                },
                    {
                        type: 'category',
                        label: 'Cypress',
                        collapsed: true,
                        items: [
                            'web-apps/automated-testing/cypress',
                            'web-apps/automated-testing/cypress/quickstart',
                            'testrunner-toolkit/configuration/cypress',
                        ]
                    },
                    {
                        type: 'category',
                        label: 'Playwright',
                        collapsed: true,
                        items: [
                            'web-apps/automated-testing/playwright',
                            'web-apps/automated-testing/playwright/quickstart',
                            'testrunner-toolkit/configuration/playwright',
                        ],
                    },
                    {
                        type: 'category',
                        label: 'TestCafe',
                        collapsed: true,
                        items: [
                            'web-apps/automated-testing/testcafe',
                            'web-apps/automated-testing/testcafe/quickstart',
                            'testrunner-toolkit/configuration/testcafe',
                        ]
                    },
                    {
                        type: 'category',
                        label: 'Puppeteer',
                        collapsed: true,
                        items: [
                            'web-apps/automated-testing/puppeteer',
                            'web-apps/automated-testing/puppeteer/quickstart',
                            'testrunner-toolkit/configuration/puppeteer',
                        ],
                    },
                ],
            },
        ],
        "API Testing": [
            'api-testing',
            'api-testing/quickstart',
            'api-testing/sauce-connect',
            'api-testing/build-from-spec',
            'api-testing/import-postman-collection',
            'api-testing/schedule-test',
            {
                type: 'category',
                label: 'Test Composer',
                collapsed: true,
                items: [
                    'api-testing/composer',
                    'api-testing/composer/io-components',
                    'api-testing/composer/assertion-components',
                    'api-testing/composer/logical-components',
                    'api-testing/composer/other-components',
                ],
            },
            {
=======
         {
             type: 'category',
             label: 'Automated Testing',
             collapsed: true,
             items: [
                 'mobile-apps/automated-testing',
                 {
                     type: 'category',
                     label: 'Appium',
                     collapsed: true,
                     items: [
                         'mobile-apps/automated-testing/appium',
                         'mobile-apps/automated-testing/appium/quickstart',
                         'mobile-apps/automated-testing/appium/real-devices',
                         'mobile-apps/automated-testing/appium/virtual-devices',
                     ],
                 },
                 {
                     type: 'category',
                     label: 'Espresso and XCUITest',
                     collapsed: true,
                     items: [
                         'mobile-apps/automated-testing/espresso-xcuitest',
                         'mobile-apps/automated-testing/espresso-xcuitest/espresso',
                         'mobile-apps/automated-testing/espresso-xcuitest/xcuitest',
                     ],
                 },
                 'mobile-apps/automated-testing/ipa-files',
             ],
         },
         'mobile-apps/ms-app-center',
         'mobile-apps/faq',
     ],
     "Web Apps": [
         'web-apps',
         {
             type: 'category',
             label: 'Live Testing',
             collapsed: true,
             items: [
                 'web-apps/live-testing/live-cross-browser-testing',
             ],
         },
         {
             type: 'category',
             label: 'Automated Testing',
             collapsed: true,
             items: [{
                 type: 'category',
                 label: 'Selenium',
                 collapsed: true,
                 items: [
                     'web-apps/automated-testing/selenium',
                     'web-apps/automated-testing/selenium/selenium4',
                     'web-apps/automated-testing/selenium/pre-run-executables',
                     'web-apps/automated-testing/selenium/sample-scripts',
                 ]
             },
                 {
                     type: 'category',
                     label: 'Cypress',
                     collapsed: true,
                     items: [
                         'web-apps/automated-testing/cypress',
                         'web-apps/automated-testing/cypress/quickstart',
                         'web-apps/automated-testing/cypress/yaml',
                     ]
                 },
                 {
                     type: 'category',
                     label: 'Playwright',
                     collapsed: true,
                     items: [
                         'web-apps/automated-testing/playwright',
                         'web-apps/automated-testing/playwright/quickstart',
                         'web-apps/automated-testing/playwright/yaml',
                     ],
                 },
                 {
                     type: 'category',
                     label: 'TestCafe',
                     collapsed: true,
                     items: [
                         'web-apps/automated-testing/testcafe',
                         'web-apps/automated-testing/testcafe/quickstart',
                         'web-apps/automated-testing/testcafe/yaml',
                     ]
                 },
                 {
                     type: 'category',
                     label: 'Puppeteer',
                     collapsed: true,
                     items: [
                         'web-apps/automated-testing/puppeteer',
                         'web-apps/automated-testing/puppeteer/quickstart',
                         'web-apps/automated-testing/puppeteer/yaml',
                     ],
                 },
             ],
         },
     ],
     "API Testing": [
         'api-testing',
         'api-testing/quickstart',
         'api-testing/sauce-connect',
         'api-testing/build-from-spec',
         'api-testing/import-postman-collection',
         'api-testing/import-export-tests',
         'api-testing/schedule-test',
           {
               type: 'category',
               label: 'Test Composer',
               collapsed: true,
               items: [
                   'api-testing/composer',
                   'api-testing/composer/io-components',
                   'api-testing/composer/assertion-components',
                   'api-testing/composer/logical-components',
                   'api-testing/composer/other-components',
                   ],
          },
          {
>>>>>>> 6e9e1ea9d7d3440483ff517e518a4291df1a604c
                type: 'category',
                label: 'Vaults, Variables, Environments',
                collapsed: true,
                items: [
                    'api-testing/vault',
                    'api-testing/environments',
                    'api-testing/variables-environment-overrides',
                ],
            },
            {
                type: 'category',
                label: 'Integrations',
                collapsed: true,
                items: [
<<<<<<< HEAD
                    'api-testing/integrations/apifctl-cicd-integration',
                    'api-testing/integrations/pagerduty-webhooks',
                ],
            },
            'api-testing/test-reports',
            'api-testing/project-dashboard',
            'api-testing/project-access',
            'api-testing/import-export-tests',
            'api-testing/clone-test',
            'api-testing/mocking',
            'api-testing/logger',
            'api-testing/legacy',
        ],
        "CI": [
            'ci',
            'ci/bamboo',
            'ci/bitbucket',
            'ci/jenkins',
            'ci/teamcity',
        ],
        "Test Results": [
            'test-results',
            'test-results/viewing-test-results',
            'test-results/sharing-test-results',
            'test-results/archived-test-results',
            'test-results/test-status',
            'test-results/badges-browser-matrix',
        ],
        "Insights": [
            'insights',
            'insights/scope',
            'insights/history',
            'insights/trends',
            'insights/coverage',
            'insights/failure-analysis',
            'insights/debug',
        ],
        "Performance": [
            'performance',
            'performance/about',
            'performance/one-page',
            'performance/transitions',
            'performance/motion',
            'performance/analyze',
        ],
        "Headless": [
            'headless',
        ],
        "saucectl": [
            'testrunner-toolkit',
            'testrunner-toolkit/installation',
            'testrunner-toolkit/configuration',
            'testrunner-toolkit/running-tests',
            {
                type: 'category',
                label: 'CI Integrations',
                collapsed: true,
                items: [
                    'testrunner-toolkit/integrations',
                    'testrunner-toolkit/integrations/circleci',
                    'testrunner-toolkit/integrations/jenkins',
                    'testrunner-toolkit/integrations/github-actions',
                    'testrunner-toolkit/integrations/gitlab',
                ],
            },
            {
                type: 'category',
                label: 'IDE Integrations',
                collapsed: true,
                items: [
                    'testrunner-toolkit/ide-integrations/intellij',
                    'testrunner-toolkit/ide-integrations/vscode'
                ],
            },
            'testrunner-toolkit/typescript',
            'testrunner-toolkit/saucectl',
        ],
        "Visual": [
            'visual',
            {
                type: 'category',
                label: 'E2E Testing',
                collapsed: true,
                items: [
                    'visual/e2e-testing/setup',
                    {
                        type: 'category',
                        label: 'Integrations',
                        collapsed: true,
                        items: [
                            'visual/e2e-testing/integrations/continuous-integration',
                            'visual/e2e-testing/integrations/slack',
                            'visual/e2e-testing/integrations/webhooks',
                        ],
                    },
                    {
                        type: 'category',
                        label: 'Workflow',
                        collapsed: true,
                        items: [
                            'visual/e2e-testing/workflow/review-workflow',
                            'visual/e2e-testing/workflow/baseline-branch',
                            'visual/e2e-testing/workflow/change-details',
                            'visual/e2e-testing/workflow/visual-history',
                            'visual/e2e-testing/workflow/ignoring-changes',
                        ],
                    },
                    'visual/e2e-testing/commands-options',
                    'visual/e2e-testing/code-examples',
                    'visual/e2e-testing/supported-browsers',
                    'visual/e2e-testing/troubleshooting',
                ],
            },
            {
                type: 'category',
                label: 'Component Testing',
                collapsed: true,
                items: [
                    'visual/component-testing/setup',
                    {
                        type: 'category',
                        label: 'Integrations',
                        collapsed: true,
                        items: [
                            'visual/component-testing/integrations/continuous-integration',
                            'visual/component-testing/integrations/slack',
                            'visual/component-testing/integrations/webhooks',
                            'visual/component-testing/integrations/github',
                            'visual/component-testing/integrations/visual-studio-team-services',
                            'visual/component-testing/integrations/sauce-labs',
                        ],
                    },
                    {
                        type: 'category',
                        label: 'Workflow',
                        collapsed: true,
                        items: [
                            'visual/component-testing/workflow/review-workflow',
                            'visual/component-testing/workflow/baseline-branch',
                            'visual/component-testing/workflow/change-details',
                            'visual/component-testing/workflow/visual-history',
                            'visual/component-testing/workflow/ignoring-changes',
                            'visual/component-testing/workflow/include-exclude-settings',
                        ],
                    },
                    'visual/component-testing/supported-browsers',
                    'visual/component-testing/storybook-interactions-testing',
                    'visual/component-testing/storybook-static',
                ],
            },
            'visual/css-animations',
            'visual/acct-team-mgmt',
            'visual/notifications',
            'visual/faq',
        ],
        "Reference": [
            'dev/glossary',
            'dev/error-messages',
            'dev/test-configuration-options',
            'dev/w3c-webdriver-capabilities',
            {
                type: 'link',
                label: 'Visual E2E Testing', // The label that should be displayed (string).
                href: '/visual/e2e-testing/commands-options' // The target URL (string).
            },
            'dev/data-center-maint',
        ],
        Contributing: [
            'contributing',
            'contributing/code-of-conduct',
            'contributing/style-guide'
        ],
    },
=======
                   'api-testing/integrations/apifctl-cicd-integration',
                   'api-testing/integrations/pagerduty-webhooks',
                    ],
                },
          'api-testing/project-dashboard',
          'api-testing/mocking',
          'api-testing/logger',
          'api-testing/project-access',
          'api-testing/legacy',
     ],
     "CI": [
         'ci',
         'ci/bamboo',
         'ci/bitbucket',
         'ci/jenkins',
         'ci/teamcity',
     ],
     "Test Results": [
         'test-results',
         'test-results/viewing-test-results',
         'test-results/sharing-test-results',
         'test-results/archived-test-results',
         'test-results/test-status',
         'test-results/badges-browser-matrix',
     ],
     "Insights": [
         'insights',
         'insights/scope',
         'insights/history',
         'insights/trends',
         'insights/coverage',
         'insights/failure-analysis',
         'insights/debug',
     ],
     "Performance": [
         'performance',
         'performance/about',
         'performance/one-page',
         'performance/transitions',
         'performance/motion',
         'performance/analyze',
     ],
     "Headless": [
         'headless',
     ],
     "Visual": [
         'visual',
         {
             type: 'category',
             label: 'E2E Testing',
             collapsed: true,
             items: [
                 'visual/e2e-testing/setup',
                 {
                     type: 'category',
                     label: 'Integrations',
                     collapsed: true,
                     items: [
                         'visual/e2e-testing/integrations/continuous-integration',
                         'visual/e2e-testing/integrations/slack',
                         'visual/e2e-testing/integrations/webhooks',
                     ],
                 },
                 {
                     type: 'category',
                     label: 'Workflow',
                     collapsed: true,
                     items: [
                         'visual/e2e-testing/workflow/review-workflow',
                         'visual/e2e-testing/workflow/baseline-branch',
                         'visual/e2e-testing/workflow/change-details',
                         'visual/e2e-testing/workflow/visual-history',
                         'visual/e2e-testing/workflow/ignoring-changes',
                     ],
                 },
                 'visual/e2e-testing/commands-options',
                 'visual/e2e-testing/code-examples',
                 'visual/e2e-testing/supported-browsers',
                 'visual/e2e-testing/troubleshooting',
             ],
         },
         {
             type: 'category',
             label: 'Component Testing',
             collapsed: true,
             items: [
                 'visual/component-testing/setup',
                 {
                     type: 'category',
                     label: 'Integrations',
                     collapsed: true,
                     items: [
                         'visual/component-testing/integrations/continuous-integration',
                         'visual/component-testing/integrations/slack',
                         'visual/component-testing/integrations/webhooks',
                         'visual/component-testing/integrations/github',
                         'visual/component-testing/integrations/visual-studio-team-services',
                         'visual/component-testing/integrations/sauce-labs',
                     ],
                 },
                 {
                     type: 'category',
                     label: 'Workflow',
                     collapsed: true,
                     items: [
                         'visual/component-testing/workflow/review-workflow',
                         'visual/component-testing/workflow/baseline-branch',
                         'visual/component-testing/workflow/change-details',
                         'visual/component-testing/workflow/visual-history',
                         'visual/component-testing/workflow/ignoring-changes',
                         'visual/component-testing/workflow/include-exclude-settings',
                     ],
                 },
                 'visual/component-testing/supported-browsers',
                 'visual/component-testing/storybook-interactions-testing',
                 'visual/component-testing/storybook-static',
             ],
         },
     'visual/css-animations',
     'visual/acct-team-mgmt',
     'visual/notifications',
     'visual/faq',
     ],
     "Reference": [
         'dev/glossary',
         'dev/error-messages',
         'dev/test-configuration-options',
         'dev/w3c-webdriver-capabilities',
         {
             type: 'link',
             label: 'Visual E2E Testing', // The label that should be displayed (string).
             href: '/visual/e2e-testing/commands-options' // The target URL (string).
         },
         'dev/data-center-maint',
     ],
     Contributing: [
         'contributing',
         'contributing/code-of-conduct',
         'contributing/style-guide'
     ],
 },
>>>>>>> 6e9e1ea9d7d3440483ff517e518a4291df1a604c
};
