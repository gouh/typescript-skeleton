import {Table, Column, Model, DataType, CreatedAt, DeletedAt, UpdatedAt} from 'sequelize-typescript'

@Table({tableName: 'pokemon'})
class Pokemon extends Model {
    @Column({
        field: 'pokemon_id',
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }) pokemonId?: number;

    @Column({
        field: 'name',
        type: DataType.STRING,
        validate: {
            len: [10,15]
        }
    }) name?: string;

    @Column({
        field: 'description',
        type: DataType.STRING,
        validate: {
            len: [10,250]
        }
    }) description?: string;

    @Column({
        field: 'status',
        type: DataType.BOOLEAN
    })
    status?: boolean;

    @CreatedAt
    @Column({field: 'created_at'})
    creationDate?: Date;

    @UpdatedAt
    @Column({field: 'updated_at'})
    updatedOn?: Date;

    @DeletedAt
    @Column({field: 'deleted_at'})
    deletionDate?: Date;
}

export default Pokemon;