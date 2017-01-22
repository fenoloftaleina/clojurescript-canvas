(ns sonja.core
  (:require [reagent.core :as r]))

(def w 256)
(def h w)

(defn by-id [id]
  (.getElementById js/document (name id)))

(defn get-px [data y x]
  (let [a (+ (* 4 x) (* 4 256 y))]
    (doall
      (map
        #(aget data (+ a %))
        (range 3)))))

(defn pixelize! [context m]
  (let [previous-m (- m 1)]
    (if (> previous-m 1)
      (let [image-data (.-data (.getImageData context 0 0 256 256))
            divider 4
            range-m 2
            xy-size-rect-colors (fn [y x]
                                  (apply concat
                                         (map
                                           (fn [y-plus]
                                             (map
                                               (fn [x-plus]
                                                 (get-px image-data
                                                         (+ y (* y-plus previous-m))
                                                         (+ x (* x-plus previous-m))))
                                               (range range-m)))
                                           (range range-m))))]
        (dorun (map
                 (fn [[y x]]
                   (let [colors (xy-size-rect-colors y x)
                         color (map #(int (/ % divider)) (apply map + colors))]
                     (set!
                       (. context -fillStyle)
                       (str
                         "rgb("
                         (apply str (interpose ", " color))
                         ")"))
                     (.fillRect context x y m m)))
                 (for [y (range 0 256 m)
                       x (range 0 256 m)]
                   [y x])))))))

(def counter (r/atom 0))

(defn pow [a x]
  (reduce * (repeat x a)))

(defn ease-out [a]
  80)

(defn happening [context]
  ((fn []
     (js/setTimeout
       #(if (< @counter 32)
          (swap! counter (partial + 2)))
       (ease-out @counter))
     (pixelize! context @counter))))

(defn main-component []
  (let [context (.getContext (by-id "here") "2d")]
    (if (<= 1 @counter)
      (.drawImage context (by-id "this") 0 0))
    [:div
     [:button
      { :on-click #(reset! counter 1) }
      "one more time with feeling"]
     [happening context]]))

(defn mount-root []
  (r/render [main-component] (.getElementById js/document "app")))

(defn init! []
  (mount-root))

(init!)
