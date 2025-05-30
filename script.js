function checkNaNOrNegative(array) { // returns bool "true" if at least one of the array's elements matches the condition.
    return array.some((element) => isNaN(element) || element < 0);
}


function printInvalidData() {
    return document.getElementById("total").textContent = "Invalid Datas!"
}

function printResult(result) {
    return document.getElementById("total").textContent = `Total: €${result}`
}


function main() {
    document.getElementById("button").onclick = function() {
        let fields = ["capital", "interest", "years"]
        let filledFields = fields.map((id) => Number(document.getElementById(id).value))
        let interestType = document.getElementById("typeInterest").value
        if(checkNaNOrNegative(filledFields)) {
            printInvalidData()
            return
        }
        if(interestType === "simple") {
            let total = filledFields[0] + filledFields[0] * ((filledFields[1])/100) * filledFields[2]
            printResult(total.toLocaleString("de-DE"))
        }
        else if(interestType === "compound") {
            let total = filledFields[0] * (1 + filledFields[1]/100) ** filledFields[2]
            printResult(total.toLocaleString("de-DE")) // "de-DE" uses commas and periods for formatting numbers according to German conventions.
        }
    }
}
main()