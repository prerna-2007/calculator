
    let memory = 0;
    let isDegrees = true;

    function clearDisplay() {
        document.getElementById("display").value = '';
    }

    function appendNumber(number) {
        document.getElementById("display").value += number;
    }

    function appendOperator(operator) {
        document.getElementById("display").value += operator;
    }

    function deleteLast() {
        let display = document.getElementById("display");
        display.value = display.value.slice(0, -1);
    }

    function toggleSign() {
        let display = document.getElementById("display");
        display.value = display.value.startsWith('-') ? display.value.slice(1) : '-' + display.value;
    }

    function calculate() {
        let display = document.getElementById("display");
        try {
            let result = eval(display.value);
            addHistory(display.value + " = " + result);
            display.value = result;
        } catch {
            display.value = 'Error';
        }
    }

    function calculateSquare() {
        let display = document.getElementById("display");
        display.value = Math.pow(parseFloat(display.value), 2);
    }

    function calculateFactorial() {
        let display = document.getElementById("display");
        let n = parseInt(display.value);
        if (n < 0) {
            display.value = 'Error';
        } else {
            let fact = 1;
            for (let i = 1; i <= n; i++) fact *= i;
            display.value = fact;
        }
    }

    function calculateLog(type) {
        let display = document.getElementById("display");
        display.value = type === 'ln' ? Math.log(parseFloat(display.value)) : Math.log10(parseFloat(display.value));
    }

    function calculateTrig(func) {
        let display = document.getElementById("display");
        let value = parseFloat(display.value);
        if (isDegrees) value = value * Math.PI / 180;
        display.value = func === 'sin' ? Math.sin(value) : func === 'cos' ? Math.cos(value) : Math.tan(value);
    }

    function toggleDegRad() {
        isDegrees = !isDegrees;
        alert(`Mode: ${isDegrees ? 'Degrees' : 'Radians'}`);
    }

    function memoryStore() {
        memory = parseFloat(document.getElementById("display").value);
    }

    function memoryRecall() {
        document.getElementById("display").value += memory;
    }

    function memoryClear() {
        memory = 0;
    }

    function toggleTheme() {
        document.body.classList.toggle("dark-mode");
    }

    function addHistory(entry) {
        const history = document.getElementById("history");
        const newEntry = document.createElement("div");
        newEntry.textContent = entry;
        history.appendChild(newEntry);
    }

    function clearHistory() {
        document.getElementById("history").innerHTML = "";
    }

    function saveHistory() {
        const historyDiv = document.getElementById("history");
        let historyContent = historyDiv.innerText;

        if (historyContent === "") {
            alert("No history to save!");
            return;
        }

        const blob = new Blob([historyContent], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement("a");
        a.href = url;
        a.download = "calculator_history.txt";
        a.click();

        URL.revokeObjectURL(url);
    }
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');

    hamburger.addEventListener('click', () => {
      menu.classList.toggle('show');
    });


    window.addEventListener('click', (event) => {
      if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
        menu.classList.remove('show');
      }
    });
  