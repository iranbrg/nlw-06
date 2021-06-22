import {
    Entity,
    PrimaryColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn
} from "typeorm";

import { v4 as uuid } from "uuid";

@Entity("users")
export default class Users {
    @PrimaryColumn()
    readonly id!: string;

    @Column()
    name!: string;

    @Column()
    email!: string;

    @Column({ name: "is_admin", default: false })
    isAdmin!: boolean;

    @CreateDateColumn({ name: "created_at" })
    createdAt!: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt!: Date;

    constructor() {
        if (!this.id) this.id = uuid();
    }
}
