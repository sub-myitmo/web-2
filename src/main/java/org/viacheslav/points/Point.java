package org.viacheslav.points;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class Point {
    private final int x;
    private final double y;
    private final double r;
    private final String date;
    private final boolean isHit;

    public Point(int x, double y, double r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.isHit = check();

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        this.date = (LocalDateTime.now()).format(formatter);

    }

    private boolean check() {
        return quarter1() || quarter3() || quarter4();
    }

    private boolean quarter3() {
        if (this.x < 0 && this.y <= 0) {
            return Math.sqrt(this.x * this.x + this.y * this.y) <= this.r;
        }
        return false;
    }


    private boolean quarter4() {
        if (this.x < 0 && this.y >= 0) {
            return (this.x >= -this.r) && (this.y <= this.r);
        }
        return false;
    }

    private boolean quarter1() {
        if (this.x >= 0 && this.y >= 0) {
            return (this.y <= this.r / 2 - 0.5 * this.x);
        }
        return false;
    }

    public int getX() {
        return this.x;
    }

    public double getY() {
        return this.y;
    }

    public double getR() {
        return this.r;
    }

    public boolean getIsHit() {
        return this.isHit;
    }

    public String getDate() {
        return this.date;
    }
}
