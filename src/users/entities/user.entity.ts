import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity({ name: 'users' })
@ObjectType()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column('varchar', { length: 60, nullable: false })
  @Field(() => String)
  name: string;

  @Column('varchar', { unique: true, length: 60, nullable: false })
  @Field(() => String)
  email: string;

  @Column('varchar', { nullable: false })
  @Field(() => String)
  password: string;

  @Column('bool', { name: 'email_verified', default: false })
  @Field(() => Boolean, { defaultValue: false })
  verified: boolean;

  @Column('bool', { default: true })
  @Field(() => Boolean, { defaultValue: true })
  active: boolean;

  @CreateDateColumn({ name: 'created_at' })
  @Field(() => Date, { defaultValue: new Date() })
  createdAt: Date;
}
