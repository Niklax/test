let question_arr = ['Диверсифікація- це...', 'Які права надані власникам привілейованих акцій', 'Оберіть альтернативні види заощаджень', 'Фондова біржа це майданчик на якому відбуваються торги', 'На відміну від облігацій акція:']
let a1_arr = ['продаж акцій на вторинному ринку за більшою ціною', 'Вирішального голосу за розподілом чистого прибутку товариства', 'антикваріат', 'криптовалютою','є борговим фінансовим інструментом;']
let a2_arr = ['інвестування в надійні компанії','Пріоритетної участі у розподілі майна товариства під час його ліквідації', 'нерухомість','цінними паперами', 'має кінцевий термін погашення;']
let a3_arr = ['інвестування у різні фінансові інструменти', 'Переважного права голосу в управлінні акціонерним товариством', 'біткоїн', 'сільськогосподарською продукцією', 'засвідчує, що її власнику належить частка компанії;']
let a4_arr = ['альтернативне інвестування в антикваріат, будівництво тощо', 'Можливості керувати акціонерним товариством', 'всі відповіді правильні', 'нафтою', 'погашається за номінальною вартістю.']
let answer_arr = ['інвестування у різні фінансові інструменти', 'Можливості керувати акціонерним товариством', 'всі відповіді правильні', 'цінними паперами', 'засвідчує, що її власнику належить частка компанії;']
let n_right_answer_arr = [3,4,4,2,3]
// let n_right_answer = 1;
let right_answers = 0;
let n_answer = 4;

question.innerHTML=question_arr[n_question.value];
a1.innerHTML = a1_arr[n_question.value];
a2.innerHTML = a2_arr[n_question.value];
a3.innerHTML = a3_arr[n_question.value];
a4.innerHTML = a4_arr[n_question.value];
answer.innerHTML = answer_arr[n_question.value];

n_right_answer = n_right_answer_arr[n_question.value];
console.log(n_question.value)
btn.addEventListener("click", f_out);
btn1.addEventListener("click", f_out1);
btn2.addEventListener("click", f_out2);
  function f_out (){
        console.log(y1.checked);
        console.log(y2.checked);
        console.log(y3.checked);
        console.log(y4.checked);

        if (y1.checked){ n_a = 1;}
        if (y2.checked){ n_a = 2;}
        if (y3.checked){ n_a = 3;}
        if (y4.checked){ n_a = 4;}
        console.log(n_a);
        
        if (n_a == n_right_answer){
        right_answers += 1;
        right_div.classList.remove("hidden");
        wrong_div.classList.add("hidden");
        console.log("n_question.value = "+n_question.value);
        console.log("n_answer = "+n_answer);
        if (n_question.value == n_answer){
            btn2.classList.add("hidden");
            let el1 = document.createElement("p");
            el1.innerHTML = "<b>"+right_answers+"</b>";
            right_div.appendChild(el1);
        }
        }
        else{
        right_answers-=1;
        right_div.classList.add("hidden");
        wrong_div.classList.remove("hidden");
        }
  }
  function f_out1 (){
    answer.classList.toggle("hidden");
    btn1.classList.toggle("opend");
  }
  function f_out2 (){
    right_div.classList.add("hidden");
    k = Number(n_question.value);
    k+=1;
    n_question.value = k;
    console.log(n_question)
    question.innerHTML=question_arr[n_question.value];
    a1.innerHTML = a1_arr[n_question.value];
    a2.innerHTML = a2_arr[n_question.value];
    a3.innerHTML = a3_arr[n_question.value];
    a4.innerHTML = a4_arr[n_question.value];
    answer.innerHTML = answer_arr[n_question.value];
    
    n_right_answer =n_right_answer_arr[n_question.value];
    
  }