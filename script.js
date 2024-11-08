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
