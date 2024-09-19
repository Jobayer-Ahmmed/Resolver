
document.getElementById('navSelect').addEventListener('change', function() {
    let selectedValue = this.value;
    if (selectedValue) {
        window.location.href = selectedValue;
    }
});