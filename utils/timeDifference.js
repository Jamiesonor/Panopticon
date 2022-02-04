export const timeDifference = (date1, date2) => {

    let diff = 0;

    if (date1 > date2) {
        diff = date1 - date2;
    } else {
        diff = date2 - date1;
    }

    let timeDiff = new Date(diff);

    let years = parseInt(Math.abs(timeDiff.getUTCFullYear() - 1970));
    if (years) {
        if (years == 1) {
            return "1 year ago"
        } else {
            return years.toString() + " years ago"
        }
    }

    let months = parseInt(Math.abs(timeDiff.getUTCMonth()));
    if (months) {
        if (months == 1) {
            return "1 month ago"
        } else {
            return months.toString() + " months ago"
        }
    }

    let days = parseInt(Math.abs(timeDiff.getUTCDate() - 1));
    if (days) {
        if (days == 1) {
            return "1 day ago"
        } else {
            return days.toString() + " days ago"
        }
    }

    let hours = parseInt(Math.abs(timeDiff.getUTCHours()));
    if (hours) {
        if (hours == 1) {
            return "1 hour ago"
        } else {
            return hours.toString() + " hours ago"
        }
    }

    let minutes = parseInt(Math.abs(timeDiff.getUTCMinutes()));
    if (minutes) {
        if (minutes == 1) {
            return "1 minute ago"
        } else {
            return minutes.toString() + " minutes ago"
        }
    } else {
        return "Just now"
    }
}