import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryColumn,
    UpdateDateColumn
} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("tags")
export default class Tags {
    @PrimaryColumn()
    readonly id!: string;

    @Column()
    name!: string;

    @CreateDateColumn({ name: "created_at" })
    createdAt!: string;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt!: string;

    constructor() {
        if (!this.id) this.id = uuid();
    }
}
