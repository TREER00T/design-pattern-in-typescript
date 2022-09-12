import OldRobotBuilder from './OldRobotBuilder';
import RobotEngineer from './RobotEngineer';
import Robot from './Robot';
import AdvancedRobotBuilder from './AdvancedRobotBuilder';


let robotEngineer = new RobotEngineer();
let robot = () => robotEngineer.getRobot();


let oldRobotBuilder = new OldRobotBuilder();
robotEngineer.build(oldRobotBuilder);
robotEngineer.makeRobot();


console.log('Old Robot Built');
showRobot(robot());


let advancedRobotBuilder = new AdvancedRobotBuilder();
robotEngineer.build(advancedRobotBuilder);
robotEngineer.makeRobot();


console.log('\nAdvanced Robot Built');
showRobot(robot());


function showRobot(robot: Robot) {
    console.log(`Robot Head Type: ${robot.getRobotHead()}`);
    console.log(`Robot Torso Type: ${robot.getRobotTorso()}`);
    console.log(`Robot Arm Type: ${robot.getRobotArms()}`);
    console.log(`Robot Leg Type: ${robot.getRobotLegs()}`);
}