import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Properties } from './properties.entity';
import { User } from './user.entity';

@Entity('schedules_users_properties')
class Schedules {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'date' })
  date: string;

  @Column({ type: 'time' })
  hour: string;

  @ManyToOne(() => Properties, (categories) => categories.schedules, {
    eager: true,
  })
  property: Properties;

  @ManyToOne(() => User, (user) => user.schedules)
  user: User;
}

export { Schedules };
