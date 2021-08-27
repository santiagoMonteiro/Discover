const balance = {
  income: [],
  expense: [],

  addIncome(income = 0) {
    balance.income.push(income);
  },

  addExpense(expense = 0) {
    balance.expense.push(expense);
  },

  calculateTotalIncomes() {
    let sumOfIncomes = 0;

    for (let value of balance.income) {
      sumOfIncomes += value;
    }
    return sumOfIncomes;
  },

  calculateTotalExpenses() {
    let sumOfExpenses = 0;

    for (let value of balance.expense) {
      sumOfExpenses += value;
    }
    return sumOfExpenses;
  },

  calculateBalance() {
    const totalBalance =
      balance.calculateTotalIncomes() - balance.calculateTotalExpenses();
    const stateOfBalance = totalBalance >= 0 ? "Positivo" : "Negativo";

    return `${stateOfBalance} - ${totalBalance.toFixed(2)} R$`;
  },
};

balance.addIncome(100);
balance.addIncome(200);
balance.addIncome(300);
balance.addIncome(300);
balance.addIncome(500);
balance.addIncome(100);
balance.addIncome(100);
balance.addIncome(100);
balance.addIncome(100);
balance.addIncome(100);
balance.addIncome(100);
balance.addIncome();

balance.addExpense(200);
balance.addExpense(400);
balance.addExpense(700);
balance.addExpense(700);
balance.addExpense();

console.log(balance.calculateBalance());
