import { linkupExerciseHandler } from "./utils"

/**
 * Wir erstellen hier eine Funktion für die Aufgabe 1. Funktionen sind praktisch
 * um den Code innerhalb, vom rest zu trennen. Dadurch können wir Variablen mit
 * gleichem Namen auch in anderen Funktionen verwenden, ohne das deren Wert
 * überschrieben wird.
 * Funktionen können auch verwendet werden, um an anderer Stelle wieder
 * verwendet zu werden. Wir machen das in diesem Projekt eigentlich nicht, aber
 * wenn Sie des Resultat von einer Funktion nochmals brauchen, können Sie das
 * wie folgt machen:
 *    `const withoutE = aufgabe01("Hier ist ein Text mit einigen e's")`
 * Damit wird der Code in aufgabe01 ausgeführt, der sollte alle e's entfernen,
 * und das Resultate wird in der Variable `withoutE` gespeichert, und kann dann
 * weiter verwendet werden.
 */
export function aufgabe01(args) {
  // Wir speichern hier den Wert von args in der Variable `input` ab. Damit soll für uns klarer werden, womit wir arbeiten.
  const input = args

  // Wir erzeugen hier eine leere Liste, in der wir das Resultat Stück für Stück anhängen.
  const result = []

  // Mit dieser Schlaufe nummerieren wir jedes Zeichen in `input` durch. Das
  // machen wir um jedes Zeichen einzeln anzuschauen.
  for (let i = 0; i < input.length; i++) {
    // Hier speichern wir das Zeichen an der Stelle `i` in der Variable
    // `currentElement`, damit es explizit ist womit wir arbeiten, aber auch
    // damit wir nicht so viele Klammern schreiben müssen.
    const currentElement = input[i]

    if (currentElement === "e") {
      // do nothing
    } else if (currentElement === "E") {
      // auch ignorieren
    } else {
      result.push(currentElement)
    }

    // Hier wird das aktuelle Zeichen ans Ende der Resultat-Liste angehängt.
  }

  // Hier geben wir das Resultat zurück, und machen einen Text daraus.
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe01]", aufgabe01)

export function aufgabe02(args) {
  const input = args
  const result = [] // Erstellt eine leere Liste

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const currentUpperCaseLetter = currentElement.toUpperCase()
    result.push(currentUpperCaseLetter) // Hier wird das aktuelle Zeichen ans Ende der Resultat-Liste angehängt.
  }
  return result.join("") // gibt das Resultat zurück ohne Abstände
}

linkupExerciseHandler("[data-click=aufgabe02]", aufgabe02)

export function aufgabe03(args) {
  const input = args
  const result = []

  // Erstelle eine Variable um alle e's zu zaehlen
  let eCount = 0 // Zählt die e's

  for (let i = 0; i < input.length; i++) {
    //Zähle alle e's in einem Text
    const currentElement = input[i]
    // Finde ein e
    if (currentElement === "e") {
      // Zähle ein e
      eCount++
    } else if (currentElement === "E") {
      // Zähle auch ein E
      eCount++
    }
  }
  // Gebe die Anzahl der e's zurueck
  return eCount
}
linkupExerciseHandler("[data-click=aufgabe03]", aufgabe03)

export function aufgabe12(args) {
  const input = args
  const result = []

  // Erstelle eine Variable und die Position des ersten e's zu speichern
  let firstE = -1 // Speichert die Position des ersten e's

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // Finde ein e
    if (currentElement === "e") {
      // Speichere die position nur beim ersten e
      if (firstE === -1) {
        firstE = i
      }
    }
  }

  //Gebe die Position zurück
  return firstE
}
linkupExerciseHandler("[data-click=aufgabe12]", aufgabe12)

export function aufgabe04(args) {
  const input = args
  const result = []

  // Erstelle eine Variable um alle Wörter in einem Text zu zählen
  let wordCount = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // Finde ein Leerzeichen
    if (currentElement === " ") {
      // Zähle ein Wort
      wordCount++ // Zählt ein Wort
    }
  }

  // Gebe die Anzahl der Wörter zurueck
  return wordCount + 1
}
linkupExerciseHandler("[data-click=aufgabe04]", aufgabe04)

export function aufgabe05(args) {
  const input = args
  const result = []

  //Erstelle eine Variable um die Anzahl der Grossbuchstaben zu zaehlen
  let capitalLetterCount = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    //Finde ein Leerzeichen oder ein Punkt
    if (currentElement === " " || currentElement === ".") {
      //Ignoriere das Leerzeichen oder das Punkt
    } else if (currentElement === currentElement.toUpperCase()) {
      // Zahlen ein Grossbuchstabe
      capitalLetterCount++ // Zählt die Grossbuchstaben
    }
  }

  //Wenn die Anzahl Grossbuchstaben grösser als 0 ist, gebe wahr zurück
  if (capitalLetterCount > 0) {
    return true
  } else {
    return false
  }
}
linkupExerciseHandler("[data-click=aufgabe05]", aufgabe05)

export function aufgabe06(args) {
  const input = args
  const result = []

  // Erstelle eine Variable um alle Sonderzeichen zu zaehlen
  let specialCharacterCount = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // Finde ein Sonderzeichen
    if (
      currentElement === "!" ||
      currentElement === "?" ||
      currentElement === "." ||
      currentElement === "-" ||
      currentElement === "(" ||
      currentElement === ")" ||
      currentElement === " " ||
      currentElement === "," ||
      currentElement === ":" ||
      currentElement === ";"
    ) {
      // Zähle ein Sonderzeichen
      specialCharacterCount++
    }
  }

  // Wenn die Anzahl Sonderzeichen über 0 ist, gebe wahr zurück
  if (specialCharacterCount > 0) {
    return true
  } else {
    return false
  }
}
linkupExerciseHandler("[data-click=aufgabe06]", aufgabe06)

export function aufgabe07(args) {
  const input = args
  const result = []

  // Erstelle eine Variable um zu testen ob in einem Text das Wort 'und' vorkommt
  let wordCount = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // Finde das Wort 'und'
    if (
      currentElement === "u" &&
      input[i + 1] === "n" &&
      input[i + 2] === "d"
    ) {
      // Zähle das Wort 'und'
      wordCount++
    }
  }

  // Wenn das Wort 'und' gefunden wurde, gebe wahr zurueck
  if (wordCount > 0) {
    return true
  } else {
    return false
  }
}

linkupExerciseHandler("[data-click=aufgabe07]", aufgabe07)

export function aufgabe08(args) {
  const input = args
  const result = []

  //Erstelle eine Variable um alle e's mit 3 zu ersetzen in einem Text
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {
      result.push("3")
    } else {
      result.push(currentElement)
    }
  }
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe08]", aufgabe08)

export function aufgabe09(args) {
  const input = args
  const result = []

  // Erstelle eine Variable um zu testen ob eine Eingabe genau 6 Elemente hat
  if (input.length === 6) {
    return true
  } else {
    return false //wenn es nicht genau 6 Elemnte hat, gibt es false zurück
  }
}

linkupExerciseHandler("[data-click=aufgabe09]", aufgabe09)

export function aufgabe13(args) {
  const input = args
  const result = []

  // Erstelle eine Variable um zu testen an welcher Stelle das letzte e steht
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {
      result.push(i)
    }
  }
  return result[result.length - 1] // das -1 bedeutet das letzte Element
}

linkupExerciseHandler("[data-click=aufgabe13]", aufgabe13)

export function aufgabe14(args) {
  const input = args
  const result = []

  // Erstelle eine Variable um die Position des dritten e's zu bestimmen
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {
      result.push(i)
    }
  }
  return result[2]
}

linkupExerciseHandler("[data-click=aufgabe14]", aufgabe14)

export function aufgabe15(args) {
  const input = args
  const result = []

  // Erstelle eine Variable um die Eingabe nur bis zum ersten Leerzeichen zu lesen
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement !== " ") {
      result.push(currentElement) //currentElement bedeutet das aktuelle Element
    } else {
      break
    }
  }
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe15]", aufgabe15)

export function aufgabe16(args) {
  const text = args
  let switchFirst = true
  const listFirst = []
  const listSecond = [] // Erstellt zwei Listen, das ist die Zweite

  //Erstelle eine Variable um die Eingabe bis zum ersten $ als ersten Teil einer liste zu speichern
  for (let i = 0; i < text.length; i++) {
    const currentElement = text[i]
    if (currentElement === "$") {
      switchFirst = !switchFirst
    } else if (switchFirst) {
      listFirst.push(currentElement)
    } else {
      listSecond.push(currentElement)
    }
  }
  return [listFirst.join(""), listSecond.join("")]
}

linkupExerciseHandler("[data-click=aufgabe16]", aufgabe16)

export function aufgabe18(args) {
  const input = args
  const result = []

  // Erstelle eine Variable um eine Eingabe durch eine andere zu ersetzen
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "n") {
      result.push("S")
    } else if (currentElement === "m") {
      result.push("r")
    } else if (currentElement === "e") {
      result.push("a")
    } else if (currentElement === "Alter") {
      result.push("16")
    } else {
      result.push(currentElement)
    }
  }
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe18]", aufgabe18)

export function aufgabe19(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    result.push(currentElement)
    result.push(currentElement)
  }
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe19]", aufgabe19)

export function aufgabe20(args) {
  const input = args
  const result = []

  //Erstelle eine Variable um zu testen ob nach jedem . ein Leerzeichen kommt
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === ".") {
      //Erkenne ob als nächstes ein Leerzeichen kommt
      if (input[i + 1] === " ") {
        //return true
      } else {
        return false
      }
    }
  }
  return true
}

linkupExerciseHandler("[data-click=aufgabe20]", aufgabe20)

export function aufgabe21(args) {
  const input = args
  const result = []

  //Erstele eine Variable um die Eingabe umzukehren
  for (let i = input.length - 1; i >= 0; i--) {
    const currentElement = input[i]
    result.push(currentElement)
  }
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe21]", aufgabe21)

export function aufgabe22(args) {
  const input = args
  const result = []
  let switchFirst = true // Das hier ist ein Switch, wenn es erkennt, dass das Zeichen k kommt, dann wird switchFirst auf false gesetzt

  //Erstelle eine Variable um alle Zeichen  mit _ zu ersetzen, bis das Zeichen k kommt, dann aufhören
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "k") {
      switchFirst = false
    }
    if (switchFirst === true) {
      //Wenn der Switch erkennt, dass das Zeichen k nicht vorhanden ist, dass "switcht" er auf true und ersetzt mit _
      result.push("_")
    } else {
      result.push(currentElement)
    }
  }
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe22]", aufgabe22)

export function eigeneaufgabe01(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "n") {
      result.push("4133")
    } else {
      result.push(currentElement)
    }
  }
  return result.join("")
}

linkupExerciseHandler("[data-click=eigeneaufgabe01]", eigeneaufgabe01)

export function eigeneaufgabe02(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const code = currentElement.charCodeAt(0)
    const letter = String.fromCharCode(code + 4)
    result.push(letter)
  }
  return result.join("")
}

linkupExerciseHandler("[data-click=eigeneaufgabe02]", eigeneaufgabe02)

export function eigeneaufgabe03(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === ",") {
      result.push(".")
    } else if (currentElement === ".") {
      result.push(",")
    } else {
      result.push(currentElement)
    }
  }
  return result.join("")
}

linkupExerciseHandler("[data-click=eigeneaufgabe03]", eigeneaufgabe03)

export function bubbleSort(args) {
  const text = args
  const list = text.split("") // Damit wandeln wir den Text in eine Liste um, das brauchen wir wenn wir Elemente vertauschen möchten.
  for (let i = 0; i < list.length - 1; i++) {
    const currentElement = list[i]
    const nextElement = list[i + 1]
    if (currentElement.charCodeAt(0) > nextElement.charCodeAt(0)) {
      // Reihenfolge stimmt nicht, Elemente müssen getauscht werden.
      const tmp = list[i + 1]
      list[i + 1] = list[i]
      list[i] = tmp
      i = -1 // starte von vorne wenn etwas vertauscht wurde.
    }
  }
  const result = list.join("")
  return result
}
linkupExerciseHandler("[data-click=bubbleSort]", bubbleSort)

export function aufgabe17(args) {
  const input = args
  const totalList = []
  const currentList = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === " ") {
      totalList.push(currentList.join(""))
      currentList.length = 0
    } else {
      currentList.push(currentElement)
    }
  }
  totalList.push(currentList.join("")) // Das gibt uns die letze Liste, die gespeichert wurde aus
  return totalList
}

linkupExerciseHandler("[data-click=aufgabe17]", aufgabe17)

export function aufgabe23(args) {
  const input = args
  const result = []

  //Erstelle eine Variable um das erste Zeichen einer Eingabe zusätzlich vorne und hinten beim Ausgeben der Eingabe zu lassen
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (i === 0) {
      result.push(currentElement)
    }
    result.push(currentElement)
    if (i === input.length - 1) {
      result.push(currentElement)
    }
  }
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe23]", aufgabe23)

export function aufgabe24(args) {
  const input = args
  const result = []

  //Erstelle eine Variable um den platz des ersten zeichens der Variable mit dem letzten platz der Variable zu vertauschen
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (i === 0) {
      result.push(currentElement)
    }
    if (i === input.length - 1) {
      result.push(currentElement)
    }
    result.push(currentElement)
  }
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe24]", aufgabe24)

export function countingSort(args) {
  const input = args
  const lookup = new Array(256).fill(0) // Erstellt ein Array (Liste) mit 256 Elementen

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)
    lookup[ascii] = lookup[ascii] + 1
  }
  const result = []
  for (let i = 0; i < lookup.length; i++) {
    const value = lookup[i]
    for (let j = 0; j < value; j++) {
      const charakter = String.fromCharCode(i)
      result.push(charakter)
    }
  }

  return result.join("")
}

linkupExerciseHandler("[data-click=countingSort]", countingSort)

export function selectionSort(args) {
  const input = args.split("")
  const result = []

  for (let i = 0; i < input.length; i++) {
    let min = input[i]
    let minIndex = i

    for (let j = i + 1; j < input.length; j++) {
      if (input[j] < min) {
        min = input[j]
        minIndex = j
      }
    }

    const tmp = input[i]
    input[i] = min
    input[minIndex] = tmp

    for (let k = i + 1; k < input.length; k++) {
      if (input[k] < min) {
        min = input[k]
        minIndex = k
      }
    }
    result.push(input[i])
  }
  return result.join("")
}

linkupExerciseHandler("[data-click=selectionSort]", selectionSort)
