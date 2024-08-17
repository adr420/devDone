
const editarea = document.querySelector("[data-editarea]");
const lineNums = document.querySelector("[data-lineNums]");
const runBtn = document.querySelector("[data-run-btn]");

const App = {
    init: function () {
        
        editarea.oninput = (e) => {
            let text = editarea.value;
            let lines = "1";
            let cnt = 1;

            for (let i=0; i < text.length; i++)
            {
                if (text[i] === '\n')
                {
                    cnt++;
                    lines = lines+"\n"+cnt;
                }
            }

            lineNums.innerText = lines;
        }

        editarea.onscroll = (e) => {
            lineNums.scrollTop = editarea.scrollTop;
        }

        runBtn.onclick = (e) => {
            eval(`
            runBtn.style.border = "3px solid red";

            `+editarea.value+`
            
            runBtn.style.border = "none";
            `);
        }
    }
}

window.onload = App.init.bind(App);