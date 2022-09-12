import RobotBuilder from './RobotBuilder';
import Robot from './Robot';

export default class RobotEngineer {

    private robotBuilder: RobotBuilder;

    build(robotBuilder: RobotBuilder) {
        this.robotBuilder = robotBuilder;
    }

    getRobot(): Robot {
        return this.robotBuilder.getRobot();
    }

    makeRobot() {
        this.robotBuilder.buildRobotHead();
        this.robotBuilder.buildRobotTorso();
        this.robotBuilder.buildRobotArms();
        this.robotBuilder.buildRobotLegs();
    }

}