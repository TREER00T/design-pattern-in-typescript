import RobotPlan from './RobotPlan';


export default class Robot implements RobotPlan {

    private robotHead: string;
    private robotTorso: string;
    private robotArms: string;
    private robotLegs: string;

    setRobotLegs(legs: string) {
        this.robotLegs = legs;
    }

    setRobotHead(head: any): any {
        this.robotHead = head;
    }

    setRobotTorso(torso: string) {
        this.robotTorso = torso;
    }

    setRobotArms(arms: string) {
        this.robotArms = arms;
    }

    getRobotHead(): string {
        return this.robotHead;
    }

    getRobotTorso(): string {
        return this.robotTorso;
    }

    getRobotArms(): string {
        return this.robotArms;
    }

    getRobotLegs(): string {
        return this.robotLegs;
    }
    
}