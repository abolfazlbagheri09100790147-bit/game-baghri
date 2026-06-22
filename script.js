// اضافه کردن افکت بزرگنمایی به تمام دکمه‌ها به صورت خودکار
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        // وقتی دکمه فشار داده می‌شود
        button.addEventListener('mousedown', () => {
            button.classList.add('btn-click-effect');
        });

        // وقتی انیمیشن تمام شد، کلاس را حذف کن تا برای بار بعد آماده باشد
        button.addEventListener('animationend', () => {
            button.classList.remove('btn-click-effect');
        });
    });
});

// تابعی که تو باید در بازی خودت برای "اشتباه" استفاده کنی
function triggerError() {
    const container = document.querySelector('.game-container');
    container.classList.add('shake-error');
    
    // حذف کلاس بعد از پایان لرزش
    setTimeout(() => {
        container.classList.remove('shake-error');
    }, 400);
}

// مثال برای تست: اگر بخواهی با زدن یک دکمه اشتباه، لرزش را ببینی
// این کد را فقط برای تست در کنسول یا در فایل خودت قرار بده
// triggerError();
