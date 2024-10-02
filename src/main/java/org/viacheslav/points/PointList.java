package org.viacheslav.points;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import jakarta.ejb.Stateful;
import jakarta.enterprise.context.SessionScoped;

@Stateful
@SessionScoped
public class PointList implements Serializable, Iterable<Point> {
    private final List<Point> points;

    public PointList() {
        this.points = new ArrayList<Point>();
    }

    public void addPoint(Point newPoint) {
        points.add(newPoint);
    }

    public void clear() {
        points.clear();
    }

    public Iterator<Point> iterator() {
        return points.iterator();
    }

    public List<Point> getPoints() {
        return points;
    }
}
