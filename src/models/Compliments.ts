import {
    Entity,
    PrimaryColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    JoinColumn,
    ManyToOne
} from "typeorm";
import { v4 as uuid } from "uuid";
import Tags from "./Tags";
import Users from "./Users";

@Entity()
export default class Compliments {
    @PrimaryColumn()
    readonly id!: string;

    @Column({ name: "user_sender" })
    userSender!: string;

    @JoinColumn({ name: "user_sender" })
    @ManyToOne(() => Users)
    sender!: Users;

    @Column({ name: "user_receiver" })
    userReceiver!: string;

    @JoinColumn({ name: "user_receiver" })
    @ManyToOne(() => Users)
    receiver!: Users;

    @Column({ name: "tag_id" })
    tagId!: string;

    @JoinColumn({ name: "tag_id" })
    @ManyToOne(() => Tags)
    tag!: Tags;

    @Column()
    message!: string;

    @CreateDateColumn({ name: "created_at" })
    createdAt!: string;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt!: string;

    constructor() {
        if (!this.id) this.id = uuid();
    }
}
