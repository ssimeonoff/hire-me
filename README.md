# Nursery app exercise

### Initial assumptions and UX
- checkins and checkouts are done at current time
- child can have 3 states - never checked in, checked in, checked out (show never checked in, latest check in or latest check out)

### Implementation notes
- use a single api for check in and check out (both having the same params and payload)
- use FE pagination
- use axios for the http requests
- do not refetch data upon successful check in/check out 

