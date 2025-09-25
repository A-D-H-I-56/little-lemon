import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

const ReservationsPage = () => {
    const { user } = useAuth();
    const [formData, setFormData] = useState({
        name: user?.name || '',
        email: user?.email || '',
        phone: '',
        date: '',
        time: '',
        occasion: '',
        tableType: ''
    });

    const tableOptions = [
        {
            id: 'table-2',
            name: 'Intimate Table',
            capacity: '2 People',
            description: 'Perfect for romantic dinners',
            price: 'No extra charge',
            className: 'table-2'
        },
        {
            id: 'table-4',
            name: 'Family Table',
            capacity: '4 People',
            description: 'Great for small families',
            price: 'No extra charge',
            className: 'table-4'
        },
        {
            id: 'table-6',
            name: 'Group Table',
            capacity: '6 People',
            description: 'Ideal for friends gathering',
            price: '+$10 setup fee',
            className: 'table-6'
        },
        {
            id: 'table-8',
            name: 'Party Table',
            capacity: '8 People',
            description: 'Perfect for celebrations',
            price: '+$15 setup fee',
            className: 'table-8'
        }
    ];

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleTableSelect = (tableId) => {
        setFormData({
            ...formData,
            tableType: tableId
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.tableType) {
            alert('Please select a table type!');
            return;
        }
        // Handle form submission here
        console.log('Reservation submitted:', formData);
        alert(`Reservation submitted successfully! You selected: ${tableOptions.find(t => t.id === formData.tableType)?.name}`);
    };

    return (
        <div className="page-container">
            <section className="featured">
                <div className="featuredTop">
                    <h2>Make a Reservation</h2>
                    <p>Book your table at Little Lemon</p>
                    {user && (
                        <p className="welcome-message">
                            Welcome back, {user.name}! We're excited to serve you.
                        </p>
                    )}
                </div>
                
                <div className="reservation-form-container">
                    <form onSubmit={handleSubmit} className="form-group">
                        <div className="form-row">
                            <div className="form-field">
                                <label htmlFor="name" className="form-label">Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                />
                            </div>
                            <div className="form-field">
                                <label htmlFor="email" className="form-label">Email *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                />
                            </div>
                        </div>

                        <div className="form-field">
                            <label htmlFor="phone" className="form-label">Phone *</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="form-input"
                            />
                        </div>

                        <div className="form-row">
                            <div className="form-field">
                                <label htmlFor="date" className="form-label">Date *</label>
                                <input
                                    type="date"
                                    id="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                />
                            </div>
                            <div className="form-field">
                                <label htmlFor="time" className="form-label">Time *</label>
                                <select
                                    id="time"
                                    name="time"
                                    value={formData.time}
                                    onChange={handleChange}
                                    required
                                    className="form-select"
                                >
                                    <option value="">Select time</option>
                                    <option value="17:00">5:00 PM</option>
                                    <option value="17:30">5:30 PM</option>
                                    <option value="18:00">6:00 PM</option>
                                    <option value="18:30">6:30 PM</option>
                                    <option value="19:00">7:00 PM</option>
                                    <option value="19:30">7:30 PM</option>
                                    <option value="20:00">8:00 PM</option>
                                    <option value="20:30">8:30 PM</option>
                                    <option value="21:00">9:00 PM</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-field">
                            <label htmlFor="occasion" className="form-label">Occasion (Optional)</label>
                            <select
                                id="occasion"
                                name="occasion"
                                value={formData.occasion}
                                onChange={handleChange}
                                className="form-select"
                            >
                                <option value="">Select occasion</option>
                                <option value="birthday">Birthday</option>
                                <option value="anniversary">Anniversary</option>
                                <option value="business">Business Dinner</option>
                                <option value="celebration">Celebration</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div>
                            <label className="form-label" style={{ fontSize: '18px', marginBottom: '15px' }}>
                                Choose Your Table
                            </label>
                            <div className="table-options">
                                {tableOptions.map((table) => (
                                    <div
                                        key={table.id}
                                        className={`table-option ${table.className} ${formData.tableType === table.id ? 'selected' : ''}`}
                                        onClick={() => handleTableSelect(table.id)}
                                    >
                                        <div className="table-illustration"></div>
                                        <h4>{table.name}</h4>
                                        <p>{table.capacity}</p>
                                        <p>{table.description}</p>
                                        <div className="price">{table.price}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button 
                            type="submit" 
                            className="reserveTable form-submit-button"
                        >
                            Reserve Table
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default ReservationsPage;
