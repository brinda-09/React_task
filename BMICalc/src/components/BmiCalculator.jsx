import React, { useState, useMemo } from 'react';
import './BmiCalculator.css';

const BmiCalculator = () => {
    const [height, setHeight] = useState(170);
    const [weight, setWeight] = useState(70);

    const bmi = useMemo(() => {
        const heightInMeters = height / 100;
        return (weight / (heightInMeters * heightInMeters)).toFixed(1);
    }, [height, weight]);

    const category = useMemo(() => {
        const value = parseFloat(bmi);
        if (value < 18.5) return { label: 'Underweight', color: '#3498db' };
        if (value < 25) return { label: 'Normal Weight', color: '#2ecc71' };
        if (value < 30) return { label: 'Overweight', color: '#f1c40f' };
        if (value < 35) return { label: 'Obese Class I', color: '#e67e22' };
        return { label: 'Obese Class II+', color: '#e74c3c' };
    }, [bmi]);

    // Calculate marker position (clamped between 0% and 100%)
    // Scale: 10 to 40 BMI covers most ranges
    const markerPosition = useMemo(() => {
        const value = parseFloat(bmi);
        const minBMI = 10;
        const maxBMI = 40;
        const percentage = ((value - minBMI) / (maxBMI - minBMI)) * 100;
        return Math.min(Math.max(percentage, 0), 100);
    }, [bmi]);

    return (
        <div className="bmi-card">
            <div className="bmi-header">
                <h2>BMI Calculator</h2>
            </div>

            <div className="input-section">
                <div className="input-group">
                    <div className="input-label">
                        <span>Height (cm)</span>
                        <span>{height} cm</span>
                    </div>
                    <input
                        type="range"
                        min="100"
                        max="250"
                        value={height}
                        onChange={(e) => setHeight(Number(e.target.value))}
                        className="range-slider"
                    />
                </div>

                <div className="input-group">
                    <div className="input-label">
                        <span>Weight (kg)</span>
                        <span>{weight} kg</span>
                    </div>
                    <input
                        type="range"
                        min="30"
                        max="200"
                        value={weight}
                        onChange={(e) => setWeight(Number(e.target.value))}
                        className="range-slider"
                    />
                </div>
            </div>

            <div className="result-section">
                <div style={{ color: category.color }} className="bmi-category">
                    {category.label}
                </div>
                <div className="bmi-value">{bmi}</div>

                <div className="bmi-gauge">
                    <div
                        className="bmi-marker"
                        style={{ left: `${markerPosition}%` }}
                    />
                </div>
            </div>

            <div style={{ marginTop: '20px', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                Healthy BMI range: 18.5 - 25
            </div>
        </div>
    );
};

export default BmiCalculator;
