@extends('layout')

@section('title', 'Company Details')

@section('content')
    <h1>{{ $company->name }}</h1>
    
    @if ($company->logo)
        <img src="{{ asset('storage/' . $company->logo) }}" width="200" height="200" alt="Logo">
    @endif

    <p>Email: {{ $company->email }}</p>

    <p>Website: <a href="{{ $company->website }}" target="_blank">{{ $company->website }}</a></p>


    <a href="{{ route('companies.edit', $company->id) }}" class="btn btn-warning">Edit Company</a>
@endsection
