import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class AppraisalCycle {
    @PrimaryGeneratedColumn()
    cycle_id: number;

    @Column()
    name: string;

    @Column('date')
    start_date: Date;

    @Column('date')
    end_date: Date;

    @Column({default: false})
    is_closed: boolean;
}


