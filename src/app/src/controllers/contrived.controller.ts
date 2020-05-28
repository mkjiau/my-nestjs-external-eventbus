import {Controller, Get, Req} from '@nestjs/common';
import { Request } from 'express';
import {EventBusTransport} from '../event-bus-transport/event.bus.transport';
import {ContrivedEvent} from '../events/contrived/contrived.event';

@Controller('/')
export class ContrivedController {

    constructor(
        readonly eventBusTransport: EventBusTransport,
    ) {}

    @Get('/contrived')
    contrived(@Req() request: Request) {
        const { aaa, bbb } = request.query;
        this.eventBusTransport.publish(new ContrivedEvent(aaa, bbb));
    }

}
