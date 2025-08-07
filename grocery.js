const form = document.getElementById('add-item-form');
const tbody = document.querySelector('#grocery-list tbody');
const totalSpan = document.getElementById('total');

let totalAmount = 0;

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const item = document.getElementById('item').value;
    const rate = parseFloat(document.getElementById('rate').value);
    const quantity = parseFloat(document.getElementById('quantity').value);
    const amount = rate * quantity;

    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();

    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${item}</td>
        <td>₹${rate.toFixed(2)}</td>
        <td>${quantity}</td>
        <td>${date}</td>
        <td>${time}</td>
        <td>₹${amount.toFixed(2)}</td>
        <td><button class="delete">Delete</button></td>
    `;

    row.querySelector('.delete').addEventListener('click', function () {
        totalAmount -= amount;
        updateTotal();
        row.remove();
    });

    tbody.appendChild(row);

    totalAmount += amount;
    updateTotal();
    form.reset();
});

function updateTotal() {
    totalSpan.textContent = totalAmount.toFixed(2);
}
