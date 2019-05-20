var ElectricLamp = function () {
    this.status = false;
    this.turnOn = function () {
        return this.status
    };
    this.turnOff = function () {
        return this.status
    };
};
var SwitchButton = function () {
    this.status = false;
    this.switchOn = function () {
        this.status = true;
    };
    this.switchOff = function () {
        this.status = false;
    };
    this.connectToLamp = function (ElectricLamp) {
        if (this.status) {
            ElectricLamp.status = true;
        } else {
            ElectricLamp.status = false;
        }
    }
};
var lamp = new ElectricLamp();
var button = new SwitchButton();
function OnOff() {
    if (!button.status){
        button.switchOn()
    }else {
        button.switchOff();
    }
    button.connectToLamp(lamp);
    if (lamp.turnOn()){
        document.getElementById('OnOff').value='On';
        document.getElementById('result').innerHTML='Den dang sang'
    }else {
        document.getElementById('OnOff').value='Off';
        document.getElementById('result').innerHTML='Den tat'
    }
}