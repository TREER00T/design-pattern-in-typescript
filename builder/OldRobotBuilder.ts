import Robot from './Robot';
import RobotBuilder from './RobotBuilder';


export default class OldRobotBuilder implements RobotBuilder {

    private robot: Robot;

    constructor() {
        this.robot = new Robot();
    }

    buildRobotHead() {
        this.robot.setRobotHead('Tin Head');
    }

    buildRobotTorso() {
        this.robot.setRobotTorso('Tin Torso');
    }

    buildRobotArms() {
        this.robot.setRobotArms('Blowtorch Arms');
    }

    buildRobotLegs() {
        this.robot.setRobotLegs('Rollar Skates');
    }

    getRobot(): Robot {
        return this.robot;
    }

}