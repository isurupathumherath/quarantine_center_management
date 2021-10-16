import { Card } from '@material-ui/core';
import { useRef, useState, useEffect } from "react";
import "hammerjs";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";

import { InquaryTable, PaymentTable, Charts, Calculation } from '../../components/FinaceComponent/DashboardComponents';

export default function FInquary() {
    const [key, setKey] = useState('Closed');
    const pdfExportComponent = useRef(null);

    const handleExportWithComponent = event => {
        pdfExportComponent.current.save();
    };
    return (
        <div>
            <div class="content container-fluid">
                <div class="page-header">
                    <div class="row">
                        <div class="col-sm-10 col-md-10">
                            <h3 class="page-title">Welcome Admin!</h3>
                            <ul class="breadcrumb">
                                <li class="breadcrumb-item active">Dashboard</li>
                            </ul>
                        </div>
                        <div class="col-sm-2 col-md-2">
                            <button type="button" class="btn btn-secondary" onClick={handleExportWithComponent} >Export Report</button>
                        </div>
                    </div>
                </div>
                <PDFExport ref={pdfExportComponent}>
                    <div class="row">
                        <div class="col-xl-3 col-sm-6 col-12">
                            <div class="card">
                                <div class="card-body">
                                    <div class="dash-widget-header">
                                        <span class="dash-widget-icon text-primary border-primary">
                                            <i class="fe fe-users"></i>
                                        </span>
                                        <div class="dash-count">
                                            <h3>168</h3>
                                        </div>
                                    </div>
                                    <div class="dash-widget-info">
                                        <h6 class="text-muted">Doctors</h6>
                                        <div class="progress progress-sm">
                                            <div class="progress-bar bg-primary w-50"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-sm-6 col-12">
                            <div class="card">
                                <div class="card-body">
                                    <div class="dash-widget-header">
                                        <span class="dash-widget-icon text-success">
                                            <i class="fe fe-credit-card"></i>
                                        </span>
                                        <div class="dash-count">
                                            <h3>487</h3>
                                        </div>
                                    </div>
                                    <div class="dash-widget-info">

                                        <h6 class="text-muted">Patients</h6>
                                        <div class="progress progress-sm">
                                            <div class="progress-bar bg-success w-50"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-sm-6 col-12">
                            <div class="card">
                                <div class="card-body">
                                    <div class="dash-widget-header">
                                        <span class="dash-widget-icon text-danger border-danger">
                                            <i class="fe fe-money"></i>
                                        </span>
                                        <div class="dash-count">
                                            <h3>485</h3>
                                        </div>
                                    </div>
                                    <div class="dash-widget-info">

                                        <h6 class="text-muted">Appointment</h6>
                                        <div class="progress progress-sm">
                                            <div class="progress-bar bg-danger w-50"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-sm-6 col-12">
                            <div class="card">
                                <div class="card-body">
                                    <div class="dash-widget-header">
                                        <span class="dash-widget-icon text-warning border-warning">
                                            <i class="fe fe-folder"></i>
                                        </span>
                                        <div class="dash-count">
                                            <h3>$62523</h3>
                                        </div>
                                    </div>
                                    <div class="dash-widget-info">

                                        <h6 class="text-muted">Revenue</h6>
                                        <div class="progress progress-sm">
                                            <div class="progress-bar bg-warning w-50"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 col-lg-6">

                            <div class="card card-chart">
                                <div class="card-header">
                                    <h4 class="card-title">Payemnt Usgae</h4>
                                </div>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <Charts />
                                        </div>
                                        <div class="col-md-6">
                                            <Calculation />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="col-md-12 col-lg-6">
                            <div class="card card-chart">
                                <div class="card-header">
                                    <h4 class="card-title">Status</h4>
                                </div>
                                <div class="card-body">
                                    <div id="morrisLine"></div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="row">
                        <InquaryTable />
                        <PaymentTable />
                    </div>
                </PDFExport>
            </div>
        </div>
    )
}