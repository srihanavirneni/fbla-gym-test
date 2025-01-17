import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

import DatePicker from '@/components/interface/DatePicker';

import './AboveTheFold.css';

const AboveTheFold = () => {
    const minDateSelection = new Date(); // min date as today
    const maxDateSelection = new Date();
    maxDateSelection.setDate(maxDateSelection.getDate() + 120); // 120 days after today

    const disabledDays = [
        {
            after: maxDateSelection,
            before: minDateSelection,
        },
    ];

    return (
        <div className="above-the-fold">
            <div className="above-the-fold__main-info">
                <h1 className="black">A Gymnasium For All Your Needs</h1>
                <h2>Looking for the perfect venue?</h2>
                <h3 className="medium">
                    At {import.meta.env.VITE_SHORT_SCHOOL_NAME}, our gymnasium
                    is available for sports events, cultural gatherings, and
                    more.
                    <br />
                    <br />
                    <b>Book now to reserve your space, all for free!</b>
                </h3>
                <div className="above-the-fold__text-field">
                    <DatePicker
                        className="text-field__date-picker"
                        disabledDays={disabledDays}
                    />
                    <Button asChild variant={'accent'}>
                        <Link to="/events/create" className="bold">
                            Book Reservation
                        </Link>
                    </Button>
                </div>
                <Button asChild variant={'link'}>
                    <Link to="/events" className="bold">
                        Book Your Tickets
                    </Link>
                </Button>
                <Button asChild variant={'link'}>
                    <Link to="/status">See Current Status</Link>
                </Button>
            </div>
        </div>
    );
};

export default AboveTheFold;
