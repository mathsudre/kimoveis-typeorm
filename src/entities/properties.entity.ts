import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Addresses } from './addresses.entity';
import { Categories } from './categories.entity';
import { Schedules } from './schedules.entity';

@Entity('properties')
class Properties {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ default: false })
  sold: boolean;

  @Column({ type: 'decimal', precision: 12, scale: 2, default: 0 })
  value: number;

  @Column()
  size: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => Addresses, { nullable: false })
  @JoinColumn()
  address: Addresses;

  @OneToMany(() => Schedules, (schedules) => schedules.property)
  schedules: Schedules[];

  @ManyToOne(() => Categories, (categories) => categories)
  category: Categories;
}

export { Properties };
