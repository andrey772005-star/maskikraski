
function calculateTotal() {
    const tariffPrice = parseInt(document.getElementById('tariff').value);
    let playersCount = parseInt(document.getElementById('players').value);
    
    if (isNaN(playersCount) || playersCount < 1) {
        playersCount = 0;
    }
    
    let extraCost = 0;
    if (document.getElementById('smoke').checked) {
        extraCost += parseInt(document.getElementById('smoke').value) * playersCount;
    }
    if (document.getElementById('granade').checked) {
        extraCost += parseInt(document.getElementById('granade').value) * playersCount;
    }
    
    const finalTotal = (tariffPrice * playersCount) + extraCost;
    document.getElementById('totalValue').innerText = finalTotal.toLocaleString('ru-RU');
}

const phoneInput = document.getElementById('userPhone');
const phoneMask = IMask(phoneInput, {
    mask: '+{7} (000) 000-00-00',
    lazy: false,
    placeholderChar: '_'
});

document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const consentCheckbox = document.getElementById('legalConsent');
    const unmaskedValue = phoneMask.unmaskedValue;
    
    if (!consentCheckbox.checked) {
        alert('Необходимо дать согласие на обработку персональных данных согласно 152-ФЗ');
        return false;
    }
    if (unmaskedValue.length < 11) {
        alert('Пожалуйста, введите номер телефона полностью.');
        return false;
    }
    
    
    if (typeof ym !== "undefined") {
        ym(109289952, 'reachGoal', 'Lead_Success');
    }
    
    alert('Отличный выбор, боец! Лис Флекс принял твою заявку. Мы свяжемся с тобой в течение получаса для подтверждения времени миссии.');
    
    
    this.reset();
    phoneMask.updateValue();
    calculateTotal();
});


calculateTotal();
