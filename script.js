/* 1.Přidejte to stránky soubor s JavaScriptem.
2. Napište funkci selectPlan s jedním parametrem planNumber. Tento parametr bude představovat číslo plánu.
Funkce podle čísla plánu vybere ze stránky správný DOM element a přidá k němu CSS třídu plan--selected.
3. Vyzkoušejte vaši funkci použít ve stránce pro výběr plánu.
4. Opakovaným voláním funkce selectPlan lze na stránce postupně vybrat všechny plány.
My bychom však chtěli, aby mohl být vybrát vždy nejvýš jeden. Upravte funkci selectPlan tak,
že vybere plán zadaný v parametru a u ostatních plánů výběr zruší.
Ke zrušení výběru stačí z příslušného prvku odebrat třídu plan--selected.
5. Opět vyzkoušejte funkci ve stránce. Neuvidíte výběr jednotlivých plánů (JavaScript je vybere velmi rychle),
ale na stránce by měl zůstat poslední vybraný plán.
*/
// Funkcia na vybratie plánu 
const selectPlan = (planNumber)=>{
    // výběr u všech plánů
    const allPlans = document.querySelectorAll('.plan');
    // remove the class
    const removeSelectedClass = (plan)=>{
        plan.classList.remove('plan--selected')
    }
    allPlans.forEach(removeSelectedClass)
    // Select the specific plan by its number --selecting by id not class
    const planToSelect = document.querySelector(`#plan${planNumber}`)
    if (planToSelect){
        planToSelect.classList.add('plan--selected')
    }
}

selectPlan(3)


