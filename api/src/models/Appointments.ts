import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('appointments')
class Appointments {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column('timestamp with time zone')
  date: Date
}

export default Appointments
