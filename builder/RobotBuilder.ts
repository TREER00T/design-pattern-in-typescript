import Robot from './Robot';

export default interface RobotBuilder {
    buildRobotHead();

    buildRobotTorso();

    buildRobotArms();

    buildRobotLegs();

    getRobot(): Robot;
}