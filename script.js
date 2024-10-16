document.addEventListener('DOMContentLoaded', () => {
    calculateEMI();
});

function updateLoanAmount(value) {
    document.getElementById('loanAmountValue').textContent = `₹${value}`;
    calculateEMI();
}

function updateLoanTenure(value) {
    document.getElementById('loanTenureValue').textContent = `${value} Months`;
    calculateEMI();
}

function updateInterestRate(value) {
    document.getElementById('interestRateValue').textContent = `${value}%`;
    calculateEMI();
}

function calculateEMI() {
    let loanAmount = document.getElementById('loanAmount').value;
    let loanTenure = document.getElementById('loanTenure').value;
    let interestRate = document.getElementById('interestRate').value;

    let monthlyInterestRate = (interestRate / 12) / 100;
    let emi = loanAmount * monthlyInterestRate * (Math.pow(1 + monthlyInterestRate, loanTenure)) / (Math.pow(1 + monthlyInterestRate, loanTenure) - 1);
    let totalInterest = (emi * loanTenure) - loanAmount;
    let totalAmountPayable = parseFloat(loanAmount) + totalInterest;

    document.getElementById('monthlyEMI').textContent = `₹${emi.toFixed(2)}`;
    document.getElementById('totalInterest').textContent = `₹${totalInterest.toFixed(2)}`;
    document.getElementById('totalAmountPayable').textContent = `₹${totalAmountPayable.toFixed(2)}`;
}

function applyForLoan() {
    alert('Loan application submitted!');
}


     


