# Nursery app exercise

### Initial assumptions and UX

- checkins and checkouts are done at current time
- child can have 3 states - never checked in, checked in, checked out (show never checked in, latest check in or latest check out)
- pickup time can be from current time till max value
- pickup time selection is mandatory to check in
- posted picked time to be in "hh:mm" in utc

### Implementation notes

- use FE pagination
- use axios for the http requests
- do not refetch/invalidate data upon successful check in/check out

### Tech questions

- why pickupTime is not in the POST payload instead?
- should BE return bad request when pickupTime is not provided in the POST?
- should pickupTime be an integer? (e.g. minutes offset from midnight)?
- why checkout response is an array? (checkin one is not)
