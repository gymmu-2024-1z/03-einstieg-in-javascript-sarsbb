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
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const currentUpperCaseLetter = currentElement.toUpperCase()
    result.push(currentUpperCaseLetter)
  }

  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe02]", aufgabe02)

export function aufgabe03(args) {
  const input = args
  const result = []

  // Erstelle eine Variable um alle e's zu zaehlen
  let eCount = 0

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
  let firstE = -1

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
      wordCount++
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
      capitalLetterCount++
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
    return false
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
  return result[result.length - 1]
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
      result.push(currentElement)
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
  const listSecond = []

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
  let switchFirst = true

  //Erstelle eine Variable um alle Zeichen  mit _ zu ersetzen, bis das Zeichen k kommt, dann aufhören
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "k") {
      switchFirst = false
    }
    if (switchFirst === true) {
      result.push("_")
    } else {
      result.push(currentElement)
    }
  }
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe22]", aufgabe22)
