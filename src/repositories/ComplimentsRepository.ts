import { EntityRepository, Repository } from "typeorm";
import Compliments from "../models/Compliments";

@EntityRepository(Compliments)
export default class ComplimentsRepository extends Repository<Compliments> {}
