beforeAll(async function () {
  // NOTE: nearlib and nearConfig are made available by near-cli/test_environment
  const near = await nearlib.connect(nearConfig)
  window.accountId = nearConfig.contractName
  window.contract = await near.loadContract(nearConfig.contractName, {
    viewMethods: ['getTasksByAccountId'],
    changeMethods: ['addNewTask', 'toggleTaskDone'],
    sender: window.accountId
  })
})

test('addNewTask', async () => {

  const tsk = await window.contract.addNewTask({
    tskId: 1,
    author: 'Nguyen Huu Thang',
    accountId: window.accountId,
    content: 'Clean bed room',
    timestamp: Date.now().toString(),
    isDone: false
  });

  console.log(tsk);
});

test('getTasksByAccountId', async () => {
  let test_accountId = window.accountId;

  const tsks = await window.contract.getTasksByAccountId(test_accountId);
  console.log(tsks);
});