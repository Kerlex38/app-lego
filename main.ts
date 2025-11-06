input.onButtonPressed(Button.A, function () {
    kitronik_air_quality.clear()
    for (let index = 0; index < 5; index++) {
        kitronik_air_quality.show("Logging..", 7, kitronik_air_quality.ShowAlign.Centre)
        kitronik_air_quality.show("" + kitronik_air_quality.readPressure(kitronik_air_quality.PressureUnitList.Pa) + "Pa", 4, kitronik_air_quality.ShowAlign.Left)
        kitronik_air_quality.measureData()
        kitronik_air_quality.logData()
        basic.pause(5000)
    }
    kitronik_air_quality.clear()
    kitronik_air_quality.show("Logging Complete", 7, kitronik_air_quality.ShowAlign.Centre)
})
input.onButtonPressed(Button.AB, function () {
    kitronik_air_quality.clear()
    kitronik_air_quality.eraseData()
    kitronik_air_quality.show("Ready", 4, kitronik_air_quality.ShowAlign.Centre)
})
input.onButtonPressed(Button.B, function () {
    kitronik_air_quality.clear()
    kitronik_air_quality.sendAllData()
    kitronik_air_quality.show("Transmission Complete", 4, kitronik_air_quality.ShowAlign.Left)
})
kitronik_air_quality.addProjectInfo("Luft", "Luftfugtighed")
kitronik_air_quality.setupGasSensor()
kitronik_air_quality.calcBaselines()
kitronik_air_quality.selectSeparator(kitronik_air_quality.Separator.comma)
kitronik_air_quality.includePressure(kitronik_air_quality.PressureUnitList.Pa, kitronik_air_quality.onOff(true))
kitronik_air_quality.clear()
kitronik_air_quality.show("Ready", 4, kitronik_air_quality.ShowAlign.Centre)
