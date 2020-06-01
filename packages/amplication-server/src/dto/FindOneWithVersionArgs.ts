import { ArgsType, Field } from '@nestjs/graphql';
import { WhereUniqueInput } from 'src/dto';

@ArgsType()
export class FindOneWithVersionArgs {
  @Field(_type => WhereUniqueInput, { nullable: false })
  where!: WhereUniqueInput;

  @Field(_type => Number, { nullable: true })
  version: number;
}
