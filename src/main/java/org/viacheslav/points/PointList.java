package org.viacheslav.points;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class PointList implements Serializable {
    private final List<Point> points;

    public PointList() {
        this.points = new ArrayList<>();
    }

    public void addPoint(Point newPoint) {
        points.add(newPoint);
    }

    public void clear() {
        points.clear();
    }


    public List<Point> getPoints() {
        return points;
    }

    public Point getLastElem (){
        return points.get(points.size() - 1);
    }
}
