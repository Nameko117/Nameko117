// 獲取用戶名稱、計數器元素和按鈕的元素
var usernameElement = document.getElementById("username");
var counterElement = document.getElementById("counter");
var incrementButton = document.getElementById("increment");
var resetButton = document.getElementById("reset");
var goBackLink = document.getElementById("goBack");


// 獲取儲存在本地存儲中的用戶名稱
var savedUsername = localStorage.getItem("username");

// 如果本地存儲中有用戶名稱，則顯示歡迎消息
if (savedUsername) {
    usernameElement.textContent = savedUsername;
}

// 獲取儲存在本地存儲中的計數數據，如果不存在，則初始化為0
var savedCounter = localStorage.getItem(savedUsername + "_counter");
if (savedCounter) {
    counterElement.textContent = savedCounter;
} else {
    counterElement.textContent = "0";
}

// 加一按鈕的點擊事件處理程序
incrementButton.addEventListener("click", function () {
    var counter = parseInt(counterElement.textContent);
    counter++;
    counterElement.textContent = counter;

    // 更新文字颜色
    updateTextColor();

    // 將計數儲存到本地存儲中
    localStorage.setItem(savedUsername + "_counter", counter.toString());
});

// 重置按鈕的點擊事件處理程序
resetButton.addEventListener("click", function () {
    counterElement.textContent = "0";

    // 更新文字颜色
    updateTextColor();

    // 重置計數並更新本地存儲
    localStorage.setItem(savedUsername + "_counter", "0");
});

// 根据不同的条件设置超链接的文字颜色
function updateTextColor() {
    var currentCounter = parseInt(counterElement.textContent);
    if (currentCounter < 10) {
        goBackLink.style.color = "green"; // 当计数小于10时，文字颜色为绿色
    } else if (currentCounter >= 10 && currentCounter < 20) {
        goBackLink.style.color = "orange"; // 当计数介于10和20之间时，文字颜色为橙色
    } else {
        goBackLink.style.color = "red"; // 当计数大于等于20时，文字颜色为红色
    }
}

// 初始化时更新文字颜色
updateTextColor();