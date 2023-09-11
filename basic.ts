/**
* Functions to PlanetX sensor by ELECFREAKS Co.,Ltd.
*/
//% color=#00B1ED  icon="\uf005" block="PlanetX_Base" blockId="PlanetX_Base"
//% groups='["Digital", "Analog", "IIC Port"]'
namespace PlanetX_Basic {
    export enum value_level {
        /**
         * Attention greater than 35
         */
        //% block="⬆"
        UP = 5,
        /**
         * Attention greater than 50
         */
        //% block="⬇"
        DOWN = 7,
        /**
         * Attention greater than 65
         */
        //% block="⬅"
        LEFT = 8,
        /**
        * Attention greater than 35
        */
        //% block="➡"
        RIGHT = 6,
        /**
         * Attention greater than 50
         */
        //% block="▷"
        Tri = 13,
        /**
         * Attention greater than 65
         */
        //% block="☐"
        Squ = 16,
        /**
        * Attention greater than 35
        */
        //% block="𐤏"
        Cir = 14,
        /**
         * Attention greater than 50
         */
        //% block="⨉"
        X = 15,
        /**
         * Attention greater than 65
         */
        //% block="L1"
        Left1 = 11,
        /**
        * Attention greater than 35
        */
        //% block="R1"
        Right1 = 12,
        /**
         * Attention greater than 50
         */
        //% block="L2"
        Left2 = 9,
        /**
         * Attention greater than 65
         */
        //% block="R2"
        Right2 = 10,
        /**
        * Attention greater than 35
        */
        //% block="SELECT"
        Sele = 1,
        /**
         * Attention greater than 50
         */
        //% block="START"
        Star = 4,
        /**
         * Attention greater than 50
         */
        //% block="L3"
        L3 = 2,
        /**
         * Attention greater than 50
         */
        //% block="R3"
        R3 = 3,
    }

    export enum LR_value {

        /**
         * Attention greater than L
         */
        //% block="L"
        LEFT = 0,
        /**
         * Attention greater than R
         */
        //% block="R"
        RIGHT = 2,


    }

    export enum value_Analog {
        /**
        * Attention greater than 35
        */
        //% block="↖"
        LUP = 9,
        /**
        * Attention greater than 35
        */
        //% block="⬆"
        UP = 5,
        /**
        * Attention greater than 35
        */
        //% block="↗"
        RUP = 10,
        /**
         * Attention greater than 65
         */
        //% block="⬅"
        LEFT = 7,
        /**
        * 32
        */
        //% block="P"
        P = 13,
        /**
        * Attention greater than 35
        */
        //% block="➡"
        RIGHT = 8,
        /*
        * Attention greater than 35
        */
        //% block="↙"
        LDOWN = 11,
        /**
        * Attention greater than 50
        */
        //% block="⬇"
        DOWN = 6,
        /**
        * Attention greater than 50
        */
        //% block="↘"
        RDOWN = 12,
        // /**
        //  * 33
        //  */
        // //% block="right3"
        // Button_R3 = 33,
        // /**
        //  * Attention greater than 35
        //  */
        // //% block="R⬆"
        // R_UP = 7,
        // /**
        //  * Attention greater than 50
        //  */
        // //% block="R⬇"
        // R_DOWN = 7,
        // /**
        //  * Attention greater than 65
        //  */
        // //% block="R⬅"
        // R_LEFT = 7,
        // /**
        // * Attention greater than 35
        // */
        // //% block="R➡"
        // R_RIGHT = 7,
        // /**
        // * Attention greater than 35
        // */
        // //% block="R↖"
        // R_LUP = 8,
        // /**
        // * Attention greater than 35
        // */
        // //% block="R↗"
        // R_RUP = 8,/**
        // * Attention greater than 35
        // */
        // //% block="R↙"
        // R_LDOWN = 8,
        // /**
        // * Attention greater than 50
        // */
        // //% block="R↘"
        // R_RDOWN = 8,
    }



    export enum ButtonEventSrouse {
        /**
         * 35
         */
        //% block="⬆"
        Button_UP = 35,
        /**
         * 37
         */
        //% block="⬇"
        Button_DOWN = 37,
        /**
         * 38
         */
        //% block="⬅"
        Button_LEFT = 38,
        /**
        * 36
        */
        //% block="➡"
        Button_RIGHT = 36,
        /**
         * 43
         */
        //% block="▷"
        Button_Tri = 43,
        /**
         * 46
         */
        //% block="☐"
        Button_Squ = 46,
        /**
        * 44
        */
        //% block="𐤏"
        Button_Cir = 44,
        /**
         * 45
         */
        //% block="⨉"
        Button_X = 45,
        /**
         * 41
         */
        //% block=" left1"
        Button_Left1 = 41,
        /**
        * 42
        */
        //% block="right1"
        Button_Right1 = 42,
        /**
         * 39
         */
        //% block="left2"
        Button_Left2 = 39,
        /**
         * 40
         */
        //% block="right2"
        Button_Right2 = 40,
        /**
        * 31
        */
        //% block="select"
        Button_Sele = 31,
        /**
         * 34
         */
        //% block="start"
        Button_Star = 34,
        // /**
        //  * 32
        //  */
        // //% block="left3"
        // Button_L3 = 32,
        // /**
        //  * 33
        //  */
        // //% block="right3"
        // Button_R3 = 33,
    }

    export enum ButtonEventState {
        /**
         * Attention greater than 50
         */
        //% block="off"
        Button_off = 0,
        /**
         * Attention greater than 50
         */
        //% block="on"
        Button_on = 1,
    }


    export enum value_A {
        /**
         * Attention greater than 35
         */
        //% block="RX"
        RX = 25,
        /**
         * Attention greater than 50
         */
        //% block="RY"
        RY = 26,
        /**
         * Attention greater than 65
         */
        //% block="LX"
        LX = 27,
        /**
        * Attention greater than 35
        */
        //% block="LY"
        LY = 28,
        /**
         * 32
         */
        //% block="L3"
        Button_L3 = 32,
        /**
         * 33
         */
        //% block="R3"
        Button_R3 = 33,
    }

    export enum Vibration {
        /**
         * Attention greater than 50
         */
        //% block="off"
        Vibration_off = 30,
        /**
         * Attention greater than 50
         */
        //% block="on"
        Vibration_on = 29,
    }

    /**
    * Whether a Button is pressed
    */
    //% subcategory=Input group="IIC Port" color=#00B1ED
    //% block="Joystick button %value_level is pressed" blockId="DigitalButton"
    export function get_Attention_Value(level: value_level): boolean {
        let value = 0
        let digital = 0

        while (pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false) != 0x10);

        switch (level) {
            case value_level.UP:
                digital = value_level.UP
                pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
                value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                if (value == 1) {
                    return true
                }
                else if (value == 0) {
                    return false
                }
            case value_level.DOWN:
                digital = value_level.DOWN
                pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
                value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                if (value == 1) {
                    return true
                }
                else if (value == 0) {
                    return false
                }
            case value_level.LEFT:
                digital = value_level.LEFT
                pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
                value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                if (value == 1) {
                    return true
                }
                else if (value == 0) {
                    return false
                }
            case value_level.RIGHT:
                digital = value_level.RIGHT
                pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
                value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                if (value == 1) {
                    return true
                }
                else if (value == 0) {
                    return false
                }
            case value_level.Tri:
                digital = value_level.Tri
                pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
                value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                if (value == 1) {
                    return true
                }
                else if (value == 0) {
                    return false
                }
            case value_level.Squ:
                digital = value_level.Squ
                pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
                value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                if (value == 1) {
                    return true
                }
                else if (value == 0) {
                    return false
                }
            case value_level.Cir:
                digital = value_level.Cir
                pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
                value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                if (value == 1) {
                    return true
                }
                else if (value == 0) {
                    return false
                }
            case value_level.X:
                digital = value_level.X
                pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
                value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                if (value == 1) {
                    return true
                }
                else if (value == 0) {
                    return false
                }
            case value_level.Left1:
                digital = value_level.Left1
                pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
                value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                if (value == 1) {
                    return true
                }
                else if (value == 0) {
                    return false
                }
            case value_level.Left2:
                digital = value_level.Left2
                pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
                value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                if (value == 1) {
                    return true
                }
                else if (value == 0) {
                    return false
                }
            case value_level.Right1:
                digital = value_level.Right1
                pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
                value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                if (value == 1) {
                    return true
                }
                else if (value == 0) {
                    return false
                }
            case value_level.Right2:
                digital = value_level.Right2
                pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
                value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                if (value == 1) {
                    return true
                }
                else if (value == 0) {
                    return false
                }
            case value_level.Sele:
                digital = value_level.Sele
                pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
                value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                if (value == 1) {
                    return true
                }
                else if (value == 0) {
                    return false
                }
            case value_level.Star:
                digital = value_level.Star
                pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
                value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                if (value == 1) {
                    return true
                }
                else if (value == 0) {
                    return false
                }
            case value_level.L3:
                digital = value_level.L3
                pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
                value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                if (value == 1) {
                    return true
                }
                else if (value == 0) {
                    return false
                }
            case value_level.R3:
                digital = value_level.R3
                pins.i2cWriteNumber(0x08, digital, NumberFormat.UInt8LE, false);
                value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                if (value == 1) {
                    return true
                }
                else if (value == 0) {
                    return false
                }
            default:
                return false
        }

    }

    /**
     * Get Analog value
    */
    //% subcategory=Input group="IIC Port" color=#00B1ED
    //% blockId="AnlogValue" block="Joystick rocker value of %value_A"
    export function GetAnalogValue(Button: value_A): number {
        let Analog = 0
        let re_value = 128

        while (pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false) != 0x10);

        switch (Button) {
            case value_A.RX:
                Analog = value_A.RX
                pins.i2cWriteNumber(0x08, Analog, NumberFormat.UInt8LE, false);
                re_value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                if (re_value != 128 && re_value != 0)
                    re_value = re_value + 1;
                break
            case value_A.RY:
                Analog = value_A.RY
                pins.i2cWriteNumber(0x08, Analog, NumberFormat.UInt8LE, false);
                re_value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                if (re_value != 0)
                    re_value = re_value + 1;
                break
            case value_A.LX:
                Analog = value_A.LX
                pins.i2cWriteNumber(0x08, Analog, NumberFormat.UInt8LE, false);
                re_value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                if (re_value != 128 && re_value != 0)
                    re_value = re_value + 1;
                break
            case value_A.LY:
                Analog = value_A.LY
                pins.i2cWriteNumber(0x08, Analog, NumberFormat.UInt8LE, false);
                re_value = pins.i2cReadNumber(0x08, NumberFormat.UInt8LE, false);
                if (re_value != 0)
                    re_value = re_value + 1;
                break
            default:
                re_value = 66
                break
        }

        re_value = re_value * 4;
        return re_value
    }
}
