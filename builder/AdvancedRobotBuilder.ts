import Robot from './Robot';
import RobotBuilder from './RobotBuilder';


export default class AdvancedRobotBuilder implements RobotBuilder {

    private robot: Robot;

    constructor() {
        this.robot = new Robot();
    }

    buildRobotHead() {
        this.robot.setRobotHead('Advanced Head');
    }

    buildRobotTorso() {
        this.robot.setRobotTorso('Advanced Torso');
    }

    buildRobotArms() {
        this.robot.setRobotArms('Advanced Arms');
    }

    buildRobotLegs() {
        this.robot.setRobotLegs('Advanced Skates');
    }

    getRobot(): Robot {
        return this.robot;
    }

}